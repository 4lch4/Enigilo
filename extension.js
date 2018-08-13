const vscode = require('vscode')
const Window = vscode.window
const Range = vscode.Range

const insertLink = () => {
  let editor = Window.activeTextEditor
  let selections = editor.selections
  let doc = editor.document

  // Iterate over each selection in the collection
  selections.forEach(selection => {
    // Perform an edit on each selection to make it a link
    editor.edit(edit => {
      // The OG text to begin with
      let ogText = doc.getText(new Range(selection.start, selection.end))

      // The New School text to replace it with
      let nsText = `[${ogText}][0]`

      // Perform the actual replacement
      edit.replace(selection, nsText)

      // Let the user know of the change
      Window.showInformationMessage(`${ogText} has been replaced with ${nsText}`)
    })
  })
}

exports.activate = () => {
  console.log(`Link-Inserter has been activated.`)
  vscode.commands.registerCommand('extension.insertLink', insertLink)
}

exports.deactivate = () => {

}
