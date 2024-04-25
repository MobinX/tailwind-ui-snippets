var fs = require('fs');
const path = require("path")
let srcDir = path.join(process.cwd(), `out/final_html`);
const cheerio = require('cheerio');
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

function replaceSpacesWithHyphens(str) {
    // Use the replace method with a regular expression to replace spaces with hyphens
    return str.replace(/ /g, '-');
}

const linkArry = ["banners", "cta-sections", "team-sections", "contact-sections", "footers", "logo-grid", "404-pages", "heroes", "faqs", "feature-sections", "pricing-sections", "testimonials", "stats", "newsletters", "inputs", "tables", "paginations", "cards", "alerts", "section-headers", "steps", "buttons", "tabs", "navbars", "select-menus", "modals", "avatars", "authentication", "sidebars", "radio-groups", "context-menus"]

let longnaems = []
let out = {}
let data = []



function processXAttributes(html) {
    const $ = cheerio.load(html);

    // Remove x-data attribute from each element
    $('[x-data]').removeAttr('x-data');

    // Process x-for and key attributes
    $('[x-for]').each((index, element) => {
        const $element = $(element);
        const xForValue = $element.attr('x-for');
        const keyAttr = $element.attr('key');
        $element.removeAttr('x-for').removeAttr('key');
    });

    // Process x-text attributes
    $('[x-text]').each((index, element) => {
        const $element = $(element);
        const text = $element.attr('x-text');
        $element.text(text).removeAttr('x-text');
    });

    // Process x-html attributes
    $('[x-html]').each((index, element) => {
        const $element = $(element);
        const html = $element.attr('x-html');
        $element.html(html).removeAttr('x-html');
    });

    return $.html();
}

files.map(async (filename) => {
    const filePath = path.join(srcDir, filename);
    let f2 = filename
    const longname = ((f2.split("-"))[0]).replace(/.html/g, "")
    const raw_html = fs.readFileSync(filePath, "utf-8")
    
    //testing
    console.log("longname", longname)
    let html = processXAttributes(raw_html)
    fs.writeFileSync(filePath, html)

   

})

