const lTools = require('../tools/LinkTools')
const eTools = require('../tools/EditorTools')

const vscode = require('vscode')
const Window = vscode.window

const handleEmptySelection = () => { return false }

/**
 * The function/command for inserting an image into a Markdown file.
 */
module.exports = () => {
  try {
    let editor = Window.activeTextEditor
    let selection = editor.selection
    if (selection.isEmpty) handleEmptySelection()

    lTools.getLinkUrlFromUser().then(url => {
      if (url === undefined || url.length === 0) return

      lTools.getNewReference(url, editor.document).then(newLink => {
        eTools.insertImageReferenceText(selection, newLink).then(res => {
          if (!newLink.existed) eTools.insertReferenceToFile(newLink)
        }).catch(err => Window.showErrorMessage(err.message))
      }).catch(err => Window.showErrorMessage(err.message))
    }).catch(err => Window.showErrorMessage(err.message))
  } catch (error) {
    console.log(error)
  }
}
