const vscode = require('vscode')
const Window = vscode.window
const Range = vscode.Range

/**
 * Replaces the currently selected text with the properly formatted Markdown
 * text to reference a link using the provided reference number, thereby
 * inserting a link reference in place of your currently selected text.
 *
 * @param {Selection} selection The text to replace with a link reference
 * @param {Link} reference The reference number to be used for the link
 *
 * @returns {Promise<boolean>} Did the edit succeed?
 */
const insertLinkReferenceText = (selection, reference) => {
  return new Promise((resolve, reject) => {
    Window.activeTextEditor.edit(builder => {
      // The OG text to begin with
      let ogText = Window.activeTextEditor.document.getText(new Range(selection.start, selection.end))

      // The New School text to replace it with
      let nsText = `[${ogText}][${reference.index}]`

      // Perform the actual replacement
      builder.replace(selection, nsText)
    }).then(fulfilled => resolve(fulfilled), err => { if (err) reject(err) })
  })
}

module.exports.insertLinkReferenceText = insertLinkReferenceText

/**
 * Replaces the currently selected text with the properly formatted Markdown
 * text to reference an image using the provided reference number, thereby
 * inserting an image reference in place of your currently selected text.
 *
 * @param {Selection} selection The text to replace with an image reference
 * @param {Link} reference The reference number to be used for the image
 *
 * @returns {Promise<boolean>} Did the edit succeed?
 */
const insertImageReferenceText = (selection, reference) => {
  return new Promise((resolve, reject) => {
    Window.activeTextEditor.edit(builder => {
      // The OG text to begin with
      let ogText = Window.activeTextEditor.document.getText(new Range(selection.start, selection.end))

      // The New School text to replace it with
      let nsText = `![${ogText}][${reference.index}]`

      // Perform the actual replacement
      builder.replace(selection, nsText)
    }).then(fulfilled => resolve(fulfilled), err => { if (err) reject(err) })
  })
}

module.exports.insertImageReferenceText = insertImageReferenceText

/**
 * Inserts a Markdown formatted line for referencing a link by index to the
 * currently active text editor. For example:
 *
 * [0]: https//unsplash.com
 *
 * @param {Link} reference The link/reference to add to the end of the file
 *
 * @returns {Promise<boolean>} Did the edit succeed?
 */
const insertReferenceToFile = reference => {
  return new Promise((resolve, reject) => {
    Window.activeTextEditor.edit(builder => {
      // The position for the actual url to go
      let position = new vscode.Position(reference.lineNum, 0)

      // The formatted string containing the index and url
      let content = `\n[${reference.index}]: ${reference.url}`

      // Insert the url reference at the bottom of the file
      builder.insert(position, content)
    }).then(fulfilled => resolve(fulfilled), err => { if (err) reject(err) })
  })
}

module.exports.insertReferenceToFile = insertReferenceToFile
