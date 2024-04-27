var fs = require('fs');
const path = require("path")
const { htmlToJsx } = require("html-to-jsx-transform");
let srcDir = path.join(process.cwd(), `out/final_html`);
let srcDirDaisy = path.join(process.cwd(), `out/final_daisy`);
let outpath = path.join(process.cwd(), `out/jsx`); 

const cheerio = require('cheerio');
const files = fs.readdirSync(srcDir);
const filesDaisy = fs.readdirSync(srcDirDaisy);

let total = files.length + filesDaisy.length
console.log("Total files to convert: ", total)

filesDaisy.map(async (filename) => {
    const filePath = path.join(srcDirDaisy, filename);
    console.log("converting " + filename)
    const raw_html = fs.readFileSync(filePath, "utf-8");
    let jsx = htmlToJsx(raw_html);
    let outPath = path.join(outpath, filename.replace(/.html/g, ".jsx"))
    fs.writeFileSync(outPath, jsx)
})

files.map(async (filename) => {
    const filePath = path.join(srcDir, filename);
    console.log("converting " + filename)
    const raw_html = fs.readFileSync(filePath, "utf-8");
    let jsx = htmlToJsx(raw_html);
    let outPath = path.join(outpath, filename.replace(/.html/g, ".jsx"))
    fs.writeFileSync(outPath, jsx)
})

