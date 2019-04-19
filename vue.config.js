'use strict'
const glob = require('glob')

const titles = {
  index: '首页',
  team:'师资团队',
  teach:'教学团队',
  course: '课程',
  video:'视频',
  info:'资讯',
  contact:'联系我们',
  infoDetails:'资讯详情',
  starplan:'星跃计划',
  about:'关于我们'

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