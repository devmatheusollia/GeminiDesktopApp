const { app, BrowserWindow, session, dialog } = require('electron');
const path = require('path');
const log = require('electron-log');
const { autoUpdater } = require('electron-updater');

// Configuração do Log
log.transports.file.resolvePath = () => path.join(app.getPath('userData'), 'logs/main.log');
log.info('App starting...');

// Função que cria a janela principal
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800
  });

  session.defaultSession.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36');
  mainWindow.loadURL('https://gemini.google.com');
};

app.whenReady().then(() => {
  createWindow();

  // Inicia a verificação de atualização assim que o app estiver pronto
  autoUpdater.checkForUpdates();
  log.info('Checking for updates...');

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// --- EVENTOS DO AUTO-UPDATER ---

autoUpdater.on('update-available', (info) => {
  log.info('Update available.', info);
});

autoUpdater.on('update-not-available', (info) => {
  log.info('Update not available.', info);
});

autoUpdater.on('error', (err) => {
  log.error('Error in auto-updater. ' + err);
});

autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  log.info(log_message);
});

autoUpdater.on('update-downloaded', (info) => {
  log.info('Update downloaded', info);
  const dialogOpts = {
    type: 'info',
    buttons: ['Reiniciar Agora', 'Mais Tarde'],
    title: 'Atualização da Aplicação',
    message: 'Uma nova versão foi baixada.',
    detail: 'Reinicie a aplicação para aplicar as atualizações.'
  };

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) {
      autoUpdater.quitAndInstall();
    }
  });
});