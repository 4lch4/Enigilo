const {
  parseExistingLinks,
  getMaxIndex,
  getLinkUrl
} = require('../tools/LinkTools')

const vscode = require('vscode')
const Window = vscode.window
const Range = vscode.Range

/**
 * The function/command for inserting a link into a Markdown file.
 */
module.exports = () => {
  try {
    let editor = Window.activeTextEditor
    let selection = editor.selection
    if (selection.isEmpty) return
    let doc = editor.document

    getLinkUrl(Window).then(url => {
      if (url === undefined || url.length === 0) return

      let newLink
      let existingLinks = parseExistingLinks(doc)

      existingLinks.forEach(link => { if (link.url === url) newLink = link })

      if (newLink === undefined) {
        let maxIndex = getMaxIndex(existingLinks)
        newLink = {
          index: maxIndex,
          url: url,
          lineNum: doc.lineCount
        }

        editor.edit(builder => {
          // The OG text to begin with
          let ogText = doc.getText(new Range(selection.start, selection.end))

          // The New School text to replace it with
          let nsText = `[${ogText}][${newLink.index}]`

          // Perform the actual replacement
          builder.replace(selection, nsText)

          // The position for the actual url to go
          let position = new vscode.Position(newLink.lineNum, 0)

          // The formatted string containing the index and url
          let content = `\n[${newLink.index}]: ${newLink.url}`

          // Insert the url reference at the bottom of the file
          builder.insert(position, content)
        })
      } else {
        editor.edit(builder => {
        // The OG text to begin with
          let ogText = doc.getText(new Range(selection.start, selection.end))

          // The New School text to replace it with
          let nsText = `[${ogText}][${newLink.index}]`

          // Perform the actual replacement
          builder.replace(selection, nsText)
        })
      }
    }).catch(err => Window.showErrorMessage(err.message))
  } catch (error) {
    console.log(error)
  }
}
