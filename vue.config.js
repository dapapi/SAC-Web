'use strict'
const glob = require('glob')

const titles = {
  index: '首页',
  test: '测试'
}
const pages = {}

glob.sync('./src/views/**/main.js').forEach(path => {
  const chunk = path.split('./src/views/')[1].split('/main.js')[0]
  pages[chunk] = {
    entry: path,
    template: `${path.split('main.js')[0]}${chunk}.html`,
    filename: `${chunk}.html`,
    title: titles[chunk],
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})
module.exports = {
  pages
}