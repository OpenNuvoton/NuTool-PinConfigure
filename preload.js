const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  onConnected: (callback) => ipcRenderer.on('connected', callback),
  onDisconnect: (callback) => ipcRenderer.on('disconnect', callback),
  onReturnPIDValue: (callback) => ipcRenderer.on('returnPIDValue', callback),
  onReturnRegisterValue: (callback) => ipcRenderer.on('returnRegisterValue', callback),
  onWarning: (callback) => ipcRenderer.on('warning', callback),
  onRunNuCADError: (callback) => ipcRenderer.on('runNuCADError', callback),
})