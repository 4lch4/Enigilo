// Used for JSDocs
const Window = require('vscode').window

/**
 * Shows a message window to the user using the provided arguments. These args
 * are passed to the window.showInformationMessage() method.
 *
 * @param {Window} window The window to display the message in
 * @param {string} text The text to display
 * @param {MessageOptions} [options] Options for displaying the message
 * @param {*[]} [items] Items to be used for clickable buttons
 */
module.exports.showMessage = (window, text, options = false, items = false) => {
  return new Promise((resolve, reject) => {
    if (options && items) {
      window.showInformationMessage(text, options, items).then(
        res => resolve(res),
        err => { if (err) reject(err) }
      )
    } else if (items) {
      window.showInformationMessage(text, items).then(
        res => resolve(res),
        err => { if (err) reject(err) }
      )
    } else {
      window.showInformationMessage(text).then(
        res => resolve(res),
        err => { if (err) reject(err) }
      )
    }
  })
}

/**
 * @typedef {Object} MessageOptions
 * @property {boolean} modal Indicates that this message should be modal.
 */
