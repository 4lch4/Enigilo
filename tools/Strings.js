// #region English
const english = {
  insertImage: {
    getLinkUrlFromUser: 'What is the URL/path of the image you wish to display?',
    getLinkTextFromUser: 'What should the reference text be for this image URL?'
  },
  insertLink: {
    getLinkUrlFromuser: 'What is the URL this link should point to?',
    getLinkTextFromUser: 'What should the reference text for this URL be?'
  },
  standard: {
    selectedEditFail: 'The selected text could not be edited successfully, please try again.',
    emptyEditFail: 'The text could not be edited successfully, please try again.',
    invalidUrl: 'Please provide a valid URL.',
    invalidReferenceText: 'Please provide a non-empty String.',
    newLink: 'New Link'
  }
}
// #endregion English

// #region Spanish
const spanish = {
  insertImage: {
    getLinkUrlFromUser: '¿Cuál es la URL / ruta de la imagen que desea mostrar?',
    getLinkTextFromUser: '¿Cuál debería ser el texto de referencia para esta imagen URL?'
  },
  insertLink: {
    getLinkUrlFromuser: '¿A qué URL debe apuntar este enlace?',
    getLinkTextFromUser: '¿Cuál debería ser el texto de referencia para esta URL?'
  },
  standard: {
    selectedEditFail: 'El texto seleccionado no se pudo editar correctamente, por favor intente nuevamente.',
    emptyEditFail: 'El texto no se pudo editar correctamente, inténtalo de nuevo.',
    invalidUrl: 'Por favor, proporcione una URL válida.',
    invalidReferenceText: 'Por favor, proporcione una cadena no vacía.',
    newLink: 'Nuevo enlace'
  }
}
// #endregion Spanish

const sTools = require('./StdTools')
const props = require('./Properties')

/**
 * Gets the text value for the current language using the provided category and
 * key parameters.
 *
 * @param {String} category The category/command you want to pull the String from
 * @param {String} key The key for the String you want the vaue of.
 */
const getText = (category, key) => {
  let lang = sTools.getConfigProperty(props.displayLanguage)

  switch (lang.toLowerCase()) {
    case 'english': return english[category][key]
    case 'spanish': return spanish[category][key]

    default: return undefined
  }
}

module.exports.getText = getText
