const fs = require('fs');

const makeBlock = (block) => {
  fs.writeFileSync(`./src/pug/blocks/_${block}.pug`, '')
  fs.appendFileSync(`./src/pug/${indexFile}.pug`, `  include blocks/_${block}.pug\n`)
  fs.writeFileSync(`./src/stylus/blocks/_${block}.styl`, '')
  fs.appendFileSync('./src/stylus/style.styl', `@import './blocks/_${block}.styl'\n`)
}

const indexFile = process.argv[2];
const blocks = process.argv.slice(3);

blocks.forEach(makeBlock)
