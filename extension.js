const vscode = require('vscode')
const path = require('path')

exports.activate = () => {
  console.log(`Enmeti has been activated.`)

  vscode.commands.registerCommand('enmeti.insertLink', require(path.join(__dirname, 'cmds', 'InsertLink')))
  vscode.commands.registerCommand('enmeti.insertImage', require(path.join(__dirname, 'cmds', 'InsertImage')))
  vscode.workspace.onDidChangeConfiguration(e => {
    console.log(`onDidChangeConfiguration called...`)
    console.log(`e.affectsConfiguration('enmeti') = ${e.affectsConfiguration('enmeti')}`)
  })
}

exports.deactivate = () => {
  console.log(`Enmeti has been deactivated.`)
}
