const vscode = require('vscode')
const path = require('path')

exports.activate = () => {
  console.log(`Enigilo has been activated...`)

  vscode.commands.registerCommand(
    'enigilo.insertLink',
    require(path.join(__dirname, 'cmds', 'InsertLink'))
  )
  vscode.commands.registerCommand(
    'enigilo.insertImage',
    require(path.join(__dirname, 'cmds', 'InsertImage'))
  )
}

exports.deactivate = () => {
  console.log(`Enigilo has been deactivated...`)
}
