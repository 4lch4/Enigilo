/**
 * Gets the value of the given configuration option from the user/workspace
 * settings. The option passed in is an enum in order to avoid requesting
 * properties that don't exist or requesting a property that *does* exist, but
 * w/ a typo such as an extra character.
 *
 * If you're unsure the accepted values, import the  file as
 * it exports them as an enum.
 *
 * @param {props} option The option you want the value of
 * @requires ./Properties.js
 */
module.exports.getConfigProperty = property => {
  const config = vscode.workspace.getConfiguration('enmeti')
  const doHave = config.has(property)

  if (doHave) return config.get(property)
  else return undefined
}

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
        err => {
          if (err) reject(err)
        }
      )
    } else if (items) {
      window.showInformationMessage(text, items).then(
        res => resolve(res),
        err => {
          if (err) reject(err)
        }
      )
    } else {
      window.showInformationMessage(text).then(
        res => resolve(res),
        err => {
          if (err) reject(err)
        }
      )
    }
  })
}

// Used for JSDocs
const vscode = require('vscode')
const Window = vscode.window
const props = require('./Properties')

/**
 * @typedef {Object} MessageOptions
 * @property {boolean} modal Indicates that this message should be modal.
 */
