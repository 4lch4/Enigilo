const lTools = require('../tools/LinkTools')
const eTools = require('../tools/EditorTools')

const vscode = require('vscode')
const Window = vscode.window

const handleEmptySelection = () => { return false }

/**
 * The function/command for inserting an image into a Markdown file.
 */
const insertImage = async () => {
  try {
    let editor = Window.activeTextEditor
    let selection = editor.selection
    if (selection.isEmpty) handleEmptySelection()

    let url = await lTools.getLinkUrlFromUser('What is the URL/path of the image you wish to display?')
    if (lTools.checkUrl(url)) {
      // Verify the link doesn't exist as a separate reference. If it does, retrieve it.
      let newRef = await lTools.getNewReference(url, editor.document)
      let edited = await eTools.insertImageReferenceText(selection, newRef)

      // If the edit succeeded and the link didn't already exist, add it to the file
      if (edited && !newRef.existed) eTools.insertReferenceToFile(newRef)
    }
  } catch (err) { console.error(err) }
}

module.exports = insertImage
