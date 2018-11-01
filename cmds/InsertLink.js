const sTools = require('../tools/StdTools')
const lTools = require('../tools/LinkTools')
const eTools = require('../tools/EditorTools')
const props = require('../tools/Properties')

const strings = require('../tools/Strings')

const vscode = require('vscode')
const Window = vscode.window

// TODO: When the esc key is pressed, make sure nothing is inserted.

/**
 * Handles when a user performs the InsertLink command without any text actually
 * selected. We first detemine if they have the property to insert on an empty
 * selection set to true, if so, we perform a separate flow than if they did
 * have a selection.
 */
const handleEmptySelection = async () => {
  if (sTools.getConfigProperty(props.handleEmptySelection)) {
    let editor = Window.activeTextEditor

    let url = await lTools.getLinkUrlFromUser()
    if (url !== undefined) {
      let linkText = await lTools.getLinkTextFromUser()

      if (linkText !== undefined) {
        let newRef = await lTools.getNewReference(url, editor.document)
        let edited = await eTools.insertLinkReferenceText(editor.selections, newRef, linkText)

        if (edited && !newRef.existed) eTools.insertReferenceToFile(newRef)
        else if (!edited) sTools.showMessage(Window, strings.getText('standard', 'emptyEditFail'))
      }
    }
  }
}

const insertLink = async () => {
  try {
    let editor = Window.activeTextEditor
    if (editor.selection.isEmpty) return handleEmptySelection()

    let url = await lTools.getLinkUrlFromUser()

    if (url !== undefined) {
      // Verify the link doesn't exist as a separate reference if it does, retrieve it
      let newRef = await lTools.getNewReference(url, editor.document)
      let edited = await eTools.insertLinkReferenceText(editor.selections, newRef)

      // If the edit succeeded and the link didn't already exist, add it to the file
      if (edited && !newRef.existed) eTools.insertReferenceToFile(newRef)
      else if (!edited) sTools.showMessage(Window, strings.getText('standard', 'selectedEditFail'))
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * The function/command for inserting a link into a Markdown file.
 */
module.exports = insertLink
