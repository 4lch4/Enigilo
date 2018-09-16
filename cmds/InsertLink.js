const { getConfigProperty } = require('../tools/StdTools')
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
  if (getConfigProperty(props.handleEmptySelection)) {
    lTools.getLinkUrlFromUser().then(url => {
      if (lTools.checkUrl(url)) {
        lTools.getNewReference(url)
      }
    })
  }
}

/**
 * The function/command for inserting a link into a Markdown file.
 */
module.exports = () => {
  try {
    let editor = Window.activeTextEditor
    if (editor.selection.isEmpty) return handleEmptySelection()

    lTools.getLinkUrlFromUser().then(url => {
      // Verify the provided URL is valid
      if (lTools.checkUrl(url)) {
        // If the link is a part of another reference, retrieve it
        lTools.getNewReference(url, editor.document).then(newLink => {
          eTools.insertLinkReferenceText(editor.selections, newLink).then(edited => {
            if (!newLink.existed && edited) eTools.insertReferenceToFile(newLink)
          }).catch(err => Window.showErrorMessage(err.message))
        }).catch(err => Window.showErrorMessage(err.message))
      }
    }).catch(err => Window.showErrorMessage(err.message))
  } catch (error) {
    console.log(error)
  }
}
