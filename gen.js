
const matter = require('gray-matter');
var fs = require('fs');
const path = require("path")
const linkArry = ["banners", "cta-sections", "team-sections", "contact-sections", "footers", "logo-grid", "404-pages", "heroes", "faqs", "feature-sections", "pricing-sections", "testimonials", "stats", "newsletters", "inputs", "tables", "paginations", "cards", "alerts", "section-headers", "steps", "buttons", "tabs", "navbars", "select-menus", "modals", "avatars", "authentication", "sidebars", "radio-groups", "context-menus"]


  let i =0 
linkArry.forEach((slug) => {
  let dir = path.join(process.cwd(), `components/${slug}`);
  let out = path.join(process.cwd(), `out/daisy`);
  const files = fs.readdirSync(dir);

  files.map(async (filename) => {
    const filePath = path.join(dir, filename);
    
      const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
      const { data: frontMatter } = matter(markdownWithMeta);
      if(frontMatter.ltr.html && frontMatter.ltr.html.htmlTail.length > 0){
        let outName = `${slug}-${frontMatter.title}-${frontMatter.id}.html`
        let outPath = path.join(out,outName)
        fs.writeFileSync(outPath,frontMatter.ltr.html.htmlTail[0].code)
        // console.log(frontMatter.ltr.html.htmlTail[0].code)
        // console.log(frontMatter)
        console.log(i)
        i++

      }
      
   
  })
})
