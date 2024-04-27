var fs = require('fs');
const path = require("path")
let srcDir = path.join(process.cwd(), `out/final_html`);
let outpath = path.join(process.cwd(), `snippets/snippets-html.json`);
let srcDirJsx = path.join(process.cwd(), `out/jsx`);
let outpathJsx = path.join(process.cwd(), `snippets/snippets-jsx.json`);
const cheerio = require('cheerio');
const files = fs.readdirSync(srcDir);
const filesJsx = fs.readdirSync(srcDirJsx);

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

function replaceSpacesWithHyphens(str) {
    // Use the replace method with a regular expression to replace spaces with hyphens
    return str.replace(/ /g, '-');
}

const linkArry = ["banners", "cta-sections", "team-sections", "contact-sections", "footers", "logo-grid", "404-pages", "heroes", "faqs", "feature-sections", "pricing-sections", "testimonials", "stats", "newsletters", "inputs", "tables", "paginations", "cards", "alerts", "section-headers", "steps", "buttons", "tabs", "navbars", "select-menus", "modals", "avatars", "authentication", "sidebars", "radio-groups", "context-menus"]

let longnaems = []
let out = {}
let outJsx = {}

let data = []

console.log("Generating HTML snippets....")
files.map(async (filename) => {
    const filePath = path.join(srcDir, filename);
    let f2 = filename
    linkArry.forEach(itm => {
        if (f2.startsWith(itm)) f2 = filename.slice(itm.length + 1);
    })


    const longname = ((f2.split("-"))[0]).replace(/.html/g, "")
    const raw_html = fs.readFileSync(filePath, "utf-8")
    const html = stringToArrayOfLines(replaceQuotes(raw_html))
    // console.log(longname)
    if (longnaems.indexOf(longname) > 0) console.error("*" + longname);
    longnaems.push(longname)
    out[longname] = {
        "prefix": [replaceSpacesWithHyphens(longname)],
        "body": html,
        "description": longname
    }

    // only for daisyx
    // console.log("longname", longname)
    // let $ = cheerio.load(raw_html)
    // let datas = $("[x-data]").attr("x-data")
    // if(datas) {
    //     let ob = eval(`(${datas})`)
    //     data.push(ob)
        
    // }
    

})



//jsx 
console.log("Generating JSX snippets....")
filesJsx.map(async (filename) => {
    const filePath = path.join(srcDirJsx, filename);
    let f2 = filename
    linkArry.forEach(itm => {
        if (f2.startsWith(itm)) f2 = filename.slice(itm.length + 1);
    })


    const longname = ((f2.split("-"))[0]).replace(/.jsx/g, "")
    const raw_jsx = fs.readFileSync(filePath, "utf-8")
    const jsx = stringToArrayOfLines(replaceQuotes(raw_jsx))

    outJsx[longname] = {
        "prefix": [replaceSpacesWithHyphens(longname)],
        "body": jsx,
        "description": longname
    }
    

})

fs.writeFileSync(outpath, JSON.stringify(out))
fs.writeFileSync(outpathJsx, JSON.stringify(outJsx))

console.log("Snippet Generation -> Done!")

// fs.writeFileSync(path.join(process.cwd(), `out/data.json`), JSON.stringify(data))
