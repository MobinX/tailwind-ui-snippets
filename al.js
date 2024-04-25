var fs = require('fs');
const path = require("path")
let srcDir = path.join(process.cwd(), `out/daisyx`);
let outpath = path.join(process.cwd(), `snippets/snippets-html.json`);

const files = fs.readdirSync(srcDir);
function replaceQuotes(inputString) {
    // Replace single quotes with backticks
    var step1 = inputString.replace(/'/g, '`');
    
    // Replace double quotes with single quotes
    var step2 = step1.replace(/"/g, "'");
    
    return step2;
}

function formatHtmlToOneLine(htmlString) {
    // Remove line breaks and extra white spaces
    return htmlString.replace(/\s+/g, ' ').trim();
}
function stringToArrayOfLines(inputString) {
    // Split the input string into an array of lines based on line breaks
    return inputString.split(/\r?\n/);
}


let out = {}

files.map(async (filename) => {
    const filePath = path.join(srcDir, filename);
    const longname = (filename.split("-"))[1]
    const longnameWithDash = longname.replace(" ","-")
    const raw_html = fs.readFileSync(filePath, "utf-8")
    const html = stringToArrayOfLines(replaceQuotes(raw_html))
    out[longname] = {
        "prefix": [longname],
      "body": html,
      "description": longname
    }
})
console.log(out)
fs.writeFileSync(outpath,JSON.stringify(out))