'use strict'

const electron = require('electron')
const app = electron.app

class Common {}

Common.url = {
  home: 'https://changkun.us',
  archives: 'https://changkun.us/archives',
  topics: 'https://changkun.us/topics',
  tags: 'https://changkun.us/tags',
  about: 'https://changkun.us/about',
  thanks: 'https://changkun.us/thanks',
  mail: 'mailto:hi[at]changkun.us'
}

Common.menu = {
  name: '欧长坤的博客',
  option: '选项',
  about: '关于',
  version: `当前版本: ${app.getVersion()}`,
  close: '关闭窗口',
  quit: `退出 ${app.getName()}`,
  view: '查看',
  home: '主页',
  archives: '文章',
  topics: '专题',
  tags: '标签',
  help: '帮助',
  dev: '开发者工具',
  aboutMe: '关于我',
  thanks: '鸣谢',
  contact: '联系我'
}

Common.tray = {
  show: '显示',
  exit: '退出'
}

module.exports = Common
