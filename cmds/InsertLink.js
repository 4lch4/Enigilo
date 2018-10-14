const { getConfigProperty, showMessage } = require('../tools/StdTools')
const { getLinkUrlFromUser, getNewReference, getLinkTextFromUser } = require('../tools/LinkTools')
const { insertReferenceToFile, insertLinkReferenceText } = require('../tools/EditorTools')
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
  return new Promise((resolve, reject) => {
    if (getConfigProperty(props.handleEmptySelection)) {
      let editor = Window.activeTextEditor

      getLinkUrlFromUser().then(url => {
        getLinkTextFromUser().then(linkText => {
          getNewReference(url, editor.document).then(newRef => {
            editor.edit(builder => {
              let newText = `[${linkText}][${newRef.index}]`

              builder.insert(editor.selection.start, newText)
            }).then(edited => {
              if (edited && !newRef.existed) insertReferenceToFile(newRef)
              else if (!edited) resolve(showMessage(Window, 'The text could not be edited successfully, please try again.'))
            }, err => { if (err) reject(err) })
          })
        })
      })
    }
  })
}

const insertLink = async () => {
  try {
    let editor = Window.activeTextEditor
    if (editor.selection.isEmpty) return handleEmptySelection()

    let url = await getLinkUrlFromUser()

    // Verify the link doesn't exist as a separate reference if it does, retrieve it
    let newRef = await getNewReference(url, editor.document)
    let edited = await insertLinkReferenceText(editor.selections, newRef)

    // If the edit succeeded and the link didn't already exist, add it to the file
    if (edited && !newRef.existed) insertReferenceToFile(newRef)
    else if (!edited) showMessage(Window, 'The selected text could not be edited successfully, please try again.')
  } catch (error) {
    console.log(error)
  }
}

/**
 * The function/command for inserting a link into a Markdown file.
 */
module.exports = insertLink
