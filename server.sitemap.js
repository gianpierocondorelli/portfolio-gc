// tslint:disable:no-require-imports

const fs = require('fs');
const sitemapGenerator = require('sitemap-generator');

const generator = sitemapGenerator('http://www.gianpierocondorelli.tk', {
  maxDepth: 1,
  filepath: './sitemap.xml',
  maxEntriesPerFile: 50000,
  stripQuerystring: true
});

// Avoid infinite loop during initial creation
generator.getCrawler().addFetchCondition((parsedUrl) => {
  return !parsedUrl.url.includes('sitemap.xml');
});

// TODO: this isn't working!
// generator.crawler.on('fetchconditionerror', (queueItem: any) => {
//   add back into sitemap stack
// });

generator.on('done', (sitemaps) => {
  console.log(sitemaps);
  if (sitemaps && sitemaps[0]) {
    fs.writeFile('dist/browser/sitemap.xml', sitemaps[0], () => {
      console.log('Generated sitemap.xml');
      console.log(sitemap[0]);
    })
  } else {
    return console.error('Failed to generate sitemap.xml');
  }
})

generator.on('clienterror', (err) => {
  return console.log(err);
})

console.log(`starting sitemap crawler on http://localhost:8080`);
generator.start();
