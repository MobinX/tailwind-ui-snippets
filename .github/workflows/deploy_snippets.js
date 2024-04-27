const fs = require('fs');
const path = require("path")
// require('dotenv').config();

//helping Functions
function incrementPatchVersion(version) {
    console.log(version);
    const parts = version.split('.');
    if (parts.length !== 3) {
        throw new Error('Invalid version format. Must be in the format "x.y.z"');
    }

    const major = parseInt(parts[0]);
    const minor = parseInt(parts[1]);
    let patch = parseInt(parts[2]);

    if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
        throw new Error('Invalid version format. Must be in the format "x.y.z" with numeric components.');
    }

    // patch++;
    // console.log(patch)
    // console.log(`${major}.${minor}.${patch+1}`);
    return `${major}.${minor}.${patch + 1}`;
}
async function editAndCommitFiles(owner, repo, branch, accessToken, files, commitMessage) {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;

    // Get the SHA of the current tree
    const getTreeShaResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
        headers: {
            Authorization: `token ${accessToken}`,
            Accept: 'application/json'
        }
    });

    if (!getTreeShaResponse.ok) {
        throw new Error(`Failed to get tree SHA: ${getTreeShaResponse.statusText}`);
    }

    const treeShaData = await getTreeShaResponse.json();
    const treeSha = treeShaData.object.sha;

    // Update file contents
    const updatedFiles = await Promise.all(files.map(async file => {
        const getFileResponse = await fetch(`${apiUrl}/${file.path}?ref=${branch}`, {
            headers: {
                Authorization: `token ${accessToken}`,
                Accept: 'application/json'
            }
        });

        if (!getFileResponse.ok) {
            throw new Error(`Failed to get file content: ${getFileResponse.statusText}`);
        }

        const fileData = await getFileResponse.json();
        const updatedContent = Buffer.from(file.content).toString('base64');

        return {
            ...file,
            sha: fileData.sha,
            content: updatedContent
        };
    }));

    // Create blobs for updated files
    const createBlob = async (content) => {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/blobs`, {
            method: 'POST',
            headers: {
                Authorization: `token ${accessToken}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content,
                encoding: 'base64'
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to create blob: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData.sha;
    };

    const updatedBlobShas = await Promise.all(updatedFiles.map(async file => {
        return await createBlob(file.content);
    }));

    // Create tree with updated file blobs
    const tree = updatedFiles.map((file, index) => {
        console.log(file.path, updatedBlobShas[index]);
        return {
            path: file.path,
            mode: '100644',
            type: 'blob',
            sha: updatedBlobShas[index]
        }
    });

    const createTreeResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees`, {
        method: 'POST',
        headers: {
            Authorization: `token ${accessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            base_tree: treeSha,
            tree: tree
        })
    });

    if (!createTreeResponse.ok) {
        throw new Error(`Failed to create tree: ${createTreeResponse.statusText}`);
    }

    const createTreeData = await createTreeResponse.json();
    const newTreeSha = createTreeData.sha;

    // Create commit
    const createCommitResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits`, {
        method: 'POST',
        headers: {
            Authorization: `token ${accessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: commitMessage,
            tree: newTreeSha,
            parents: [treeSha]
        })
    });

    if (!createCommitResponse.ok) {
        throw new Error(`Failed to create commit: ${createCommitResponse.statusText}`);
    }

    const createCommitData = await createCommitResponse.json();
    const newCommitSha = createCommitData.sha;

    // Update reference (branch)
    const updateRefResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
        method: 'PATCH',
        headers: {
            Authorization: `token ${accessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sha: newCommitSha,
            force: true
        })
    });

    if (!updateRefResponse.ok) {
        throw new Error(`Failed to update reference: ${updateRefResponse.statusText}`);
    }

    console.log('Snippets Deployed and committed successfully!');
}
async function fetchJSON(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON:', error);
        throw error;
    }
}

// Main
console.log("Deploying snippets....")

const owner = 'MobinX';
const repo = 'floatui-daisyui-snippets-vscode';
const branch = 'master';
const accessToken = process.env.GH_TOKEN
let content1 = fs.readFileSync(path.join(process.cwd(), `snippets/snippets-jsx.json`), "utf-8");
let content2 = fs.readFileSync(path.join(process.cwd(), `snippets/snippets-html.json`), "utf-8");


fetchJSON("https://raw.github.com/MobinX/floatui-daisyui-snippets-vscode/master/package.json")
    .then(data3 => {
        let version = incrementPatchVersion(data3.version);
        let content3 = { ...data3, version: version };
        const commitMessage = `release v${version}`;
        const files = [
            {
                path: 'snippets/snippets-jsx.json',
                content: JSON.stringify(content1)
            },
            {
                path: 'snippets/snippets-html.json',
                content: JSON.stringify(content2),
            },
            {
                path: 'package.json',
                content: JSON.stringify(content3)
            }
        ];
        editAndCommitFiles(owner, repo, branch, accessToken, files, commitMessage)
            .catch(error => console.error(error));
}).catch(error => console.error('Error:', error));



console.log("Deploying snippets -> Done!")



