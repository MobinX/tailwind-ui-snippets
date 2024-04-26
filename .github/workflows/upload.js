require('dotenv').config();
const repoOwner = 'MobinX';
const repoName = 'floatui-daisyui-snippets-vscode';
const branch = 'master';
const accessToken = process.env.GH_TOKEN
const workflowName = 'fetch_snippets.yml';

async function triggerWorkflow() {
    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows/${workflowName}/dispatches`, {
            method: 'POST',
            headers: {
                'Authorization': `token ${accessToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ref: 'master'
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to trigger workflow: ${response.statusText}`);
        }

        console.log('Workflow triggered successfully!');
    } catch (error) {
        console.error('Error:', error);
    }
}

triggerWorkflow();