const vscode = require('vscode')

exports.activate = () => {
  console.log(`Enmeti has been activated.`)

  vscode.commands.registerCommand('enmeti.insertLink', require('./cmds/InsertLink'))
}

exports.deactivate = () => {}
