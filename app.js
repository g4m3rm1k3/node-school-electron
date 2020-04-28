var electron = require('electron');


electron.app.on('ready', function () {
  const { BrowserWindow } = require('electron')
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  ,width: 600, height: 800})
  win.loadURL('file://' + __dirname + '/index.html')
});
