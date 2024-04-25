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
const linkArry = ["banners", "cta-sections", "team-sections", "contact-sections", "footers", "logo-grid", "404-pages", "heroes", "faqs", "feature-sections", "pricing-sections", "testimonials", "stats", "newsletters", "inputs", "tables", "paginations", "cards", "alerts", "section-headers", "steps", "buttons", "tabs", "navbars", "select-menus", "modals", "avatars", "authentication", "sidebars", "radio-groups", "context-menus"]

let longnaems = []
let out = {}

files.map(async (filename) => {
    const filePath = path.join(srcDir, filename);
    let f2 = filename
    linkArry.forEach(itm => {
        if(f2.startsWith(itm)) f2 = filename.slice(itm.length+1);
    })


    const longname = (f2.split("-"))[0]
    const longnameWithDash = longname.replace(" ","-")
    const raw_html = fs.readFileSync(filePath, "utf-8")
    const html = stringToArrayOfLines(replaceQuotes(raw_html))
    console.log(longname)
    if(longnaems.indexOf(longname) > 0 ) console.error("*"  + longname);
    longnaems.push(longname)
    out[longname] = {
        "prefix": [longname],
      "body": html,
      "description": longname
    }
})

fs.writeFileSync(outpath,JSON.stringify(out))


