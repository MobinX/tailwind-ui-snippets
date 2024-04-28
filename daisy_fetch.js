const axios = require('axios');
const cheerio = require('cheerio');
var fs = require('fs');
const path = require("path")
let outDir = path.join(process.cwd(), `out/final_daisy`);
const prettier = require('prettier');

//checking if an elememt already exists in an array if exists return true else false
function checkIfExists(arr, el) {
    return arr.includes(el);
}

async function crawlPage(pageUrl) {
    try {
        // Fetch HTML content of the page
        const response = await axios.get(pageUrl);
        const html = response.data;

        // Load HTML content into Cheerio
        const $ = cheerio.load(html);

        const result = [];
        

        // Iterate over each block with class "component-preview"
        $('.component-preview').each((index, element) => {
            // Extract title text from span with class "component-preview-title"
            const title = $(element).find('.component-preview-title').text().trim();

            // Select the preview element and remove all its children except the first one
            const previewElement = $(element).find('.preview');
            previewElement.children().slice(1).remove();

              // Remove data-svelte-h attribute from any child element containing it within the preview element
              previewElement.find('[data-svelte-h]').removeAttr('data-svelte-h');

            // Extract HTML code within the modified preview element
            const code = previewElement.html().trim();

            // Push title and code to result array
            result.push({ title, code });
        });

        return result;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

//function to replace "/" with "-" and "<" and ">" with nothing
function replaceSlash(str) {
    return str.replace(/\//g, "-").replace(/</g, "").replace(/>/g, "");
}



async function getComponentLinks(baseUrl) {
    try {
        // Fetch HTML content of the page
        const response = await axios.get(baseUrl);
        const html = response.data;

        // Load HTML content into Cheerio
        const $ = cheerio.load(html);

        const componentLinks = [];

        // Find all anchor tags with href containing 'component'
        $('a[href*=component]').each((index, element) => {
            const href = $(element).attr('href');
            if (href != "/components/") componentLinks.push(href);
        });

        return componentLinks;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}


// Example usage:
const baseUrl = 'https://daisyui.com';
const filenames = []
getComponentLinks(baseUrl)
    .then(links => {
        links.map(async (link) => {
            const pageUrl = `${baseUrl}${link}`;
            const comps = await crawlPage(pageUrl);
            comps.map(async({ title, code }) => {
                //title with link name (component name)
                title = link.split("/")[2] + " - " + title;
                if (checkIfExists(filenames, replaceSlash(title))) {
                    console.log("file already exists", title);
                    title = title + " with more style";
                }
                filenames.push(replaceSlash(title));
                console.log("writing " + replaceSlash(title));
                const filename = replaceSlash(title) + ".html";
                const outPath = path.join(outDir, filename);
                let formattedCode = await prettier.format(code, { parser: 'html' });
                fs.writeFileSync(outPath, formattedCode);

            });
        })


    })
    .catch(error => {
        console.error('Error:', error);
    });
