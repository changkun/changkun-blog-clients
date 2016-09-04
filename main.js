const electron      = require('electron');

const app           = electron.app;
const shell         = electron.shell;
const dialog        = electron.dialog;
const ipcMain       = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;

const menu          = require('./menu');

// global main window.
let mainWindow;

// window creator
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 1000,
        minHeight: 800,
        webPreferences: {
            nodeIntegration: false,
            preload: `${__dirname}/preload.js`
        }
    });
    mainWindow.loadURL(`https://changkun.us`);
    mainWindow.on('close', (event) => {
        if (process.platform = 'darwin') {
            if (mainWindow.isVisible()) {
                event.preventDefault();
                mainWindow.hide();
            }
        } else {
            app.quit(0);
        }
    });
    mainWindow.webContents.on('will-navigate', (event, url) => {
        event.preventDefault();
        if(url.match('changkun.us') == null) shell.openExternal(url);
        else mainWindow.loadURL(url);
    })
    mainWindow.webContents.on('new-window', (event, url) => {
        event.preventDefault();
        if(url.match('changkun.us') == null) shell.openExternal(url);
        else mainWindow.loadURL(url);
    })
}

app.on('ready', () => {
    if (mainWindow == null) createWindow();
    else mainWindow.show();
    menu.createMenu();
});
app.on('activate', () => {
    if (mainWindow == null) createWindow();
    else mainWindow.show();
});