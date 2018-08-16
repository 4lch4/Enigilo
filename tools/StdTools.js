// Used for JSDocs
const Window = require('vscode').window

/**
 * @typedef {Object} MessageOptions
 * @property {boolean} modal Indicates that this message should be modal.
 */

/**
 *
 * @param {Window} window
 * @param {string} text
 * @param {MessageOptions} [options]
 * @param {*[]} [items]
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
