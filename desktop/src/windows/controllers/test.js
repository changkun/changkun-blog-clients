'use strict'

const electron = require('electron')
const BrowserWindow = electron.BrowserWindow

let tester

function createTester () {
  tester = new BrowserWindow({ width: 0, height: 0, show: false })
  tester.loadURL('https://github.com')
}

module.exports.createTester = createTester
