const vscode = require('vscode')
const Window = vscode.window
const Range = vscode.Range

const { showMessage } = require('./tools/StdTools')
const {
  parseExistingLinks,
  getMaxIndex,
  getLinkUrl
} = require('./tools/LinkTools')
const Selection = require('vscode').window.activeTextEditor.selection

/**
 * Verifies the provided selection isn't a blank selection.
 *
 * @param {Selection} selection
 *
 * @returns {boolean} True or false, is the selection a valid selection?
 */
const verifySelection = selection => {
  if (selection.start.isEqual(selection.end)) {
    showMessage(Window, 'Please make a selection before executing this command.')
      .catch(err => Window.showErrorMessage(err.message))
    return false
  } else return true
}

/**
 * The function/command for inserting a link into a Markdown file.
 */
const insertLink = () => {
  let editor = Window.activeTextEditor
  let selection = editor.selection
  let doc = editor.document

  getLinkUrl(Window).then(url => {
    if (url.length === 0) return

    let existingLinks = parseExistingLinks(doc)
    let maxIndex = getMaxIndex(existingLinks)

    if (verifySelection(selection)) {
      try {
        let link = {
          index: maxIndex,
          url: url,
          lineNum: doc.lineCount
        }

        editor.edit(builder => {
        // The OG text to begin with
          let ogText = doc.getText(new Range(selection.start, selection.end))

          // The New School text to replace it with
          let nsText = `[${ogText}][${link.index}]`

          // Perform the actual replacement
          builder.replace(selection, nsText)

          // The position for the actual url to go
          let position = new vscode.Position(link.lineNum, 0)

          // The formatted string containing the index and url
          let content = `\n[${link.index}]: ${link.url}`

          // Insert the url reference at the bottom of the file
          builder.insert(position, content)
        })
      } catch (err) { Window.showErrorMessage(err.message) }
    }
  }).catch(err => Window.showErrorMessage(err.message))
}

exports.activate = () => {
  // console.log(`Enmeti has been activated.`)

  vscode.commands.registerCommand('extension.insertLink', insertLink)
}

exports.deactivate = () => {}
