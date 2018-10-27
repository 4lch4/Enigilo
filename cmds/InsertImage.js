const sTools = require('../tools/StdTools')
const props = require('../tools/Properties')
const lTools = require('../tools/LinkTools')
const eTools = require('../tools/EditorTools')

const vscode = require('vscode')
const Window = vscode.window

const Strings = require('../tools/Strings')
const strings = new Strings(sTools.getConfigProperty(props.displayLanguage))

const handleEmptySelection = async () => {
  if (sTools.getConfigProperty(props.handleEmptySelection)) {
    let editor = Window.activeTextEditor

    let url = await lTools.getLinkUrlFromUser(strings.getText('insertImage', 'getLinkUrlFromUser'))
    let linkText = await lTools.getLinkTextFromUser()

    let newRef = await lTools.getNewReference(url, editor.document)
    let edited = await eTools.insertImageReferenceText(editor.selection, newRef, linkText)

    if (edited && !newRef.existed) eTools.insertReferenceToFile(newRef)
    else if (!edited) sTools.showMessage(Window, strings.getText('standard', 'emptyEditFail'))
  }
}

/**
 * The function/command for inserting an image into a Markdown file.
 */
const insertImage = async () => {
  try {
    let editor = Window.activeTextEditor
    if (editor.selection.isEmpty) return handleEmptySelection()

    let url = await lTools.getLinkUrlFromUser(strings.getText('insertImage', 'getLinkUrlFromUser'))

    // Verify the link doesn't exist as a separate reference. If it does, retrieve it.
    let newRef = await lTools.getNewReference(url, editor.document)
    let edited = await eTools.insertImageReferenceText(editor.selection, newRef)

    // If the edit succeeded and the link didn't already exist, add it to the file
    if (edited && !newRef.existed) eTools.insertReferenceToFile(newRef)
    else if (!edited) sTools.showMessage(Window, strings.getText('standard', 'selectedEditFail'))
  } catch (err) { console.error(err) }
}

module.exports = insertImage
