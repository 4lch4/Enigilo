const sTools = require('../tools/StdTools')
const lTools = require('../tools/LinkTools')
const eTools = require('../tools/EditorTools')
const props = require('../tools/Properties')

const vscode = require('vscode')
const Window = vscode.window

/**
 * Handles when a user performs the InsertLink command without any text actually
 * selected. We first detemine if they have the property to insert on an empty
 * selection set to true, if so, we perform a separate flow than if they did
 * have a selection.
 */
const handleEmptySelection = () => {
  if (sTools.getConfigProperty(props.handleEmptySelection)) {
    lTools.getLinkUrlFromUser().then(url => {
      if (lTools.checkUrl(url)) {
        lTools.getNewReference(url)
      }
    })
  }
}

const insertLink = async () => {
  try {
    let editor = Window.activeTextEditor
    if (editor.selection.isEmpty) return handleEmptySelection()

    let url = await lTools.getLinkUrlFromUser()

    // Verify the provided URL is valid
    if (lTools.checkUrl(url)) {
      // Verify the link doesn't exist as a separate reference if it does, retrieve it
      let newRef = await lTools.getNewReference(url, editor.document)
      let edited = await eTools.insertLinkReferenceText(editor.selections, newRef)

      // If the edit succeeded and the link didn't already exist, add it to the file
      if (edited && !newRef.existed) eTools.insertReferenceToFile(newRef)
      else if (!edited) sTools.showMessage(Window, 'The selected text could not be edited successfully, please try again.')
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * The function/command for inserting a link into a Markdown file.
 */
module.exports = insertLink
