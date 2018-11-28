// #region Completed Language Data
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
    invalidReferenceText: 'Please provide at least one letter, empty text will not work.',
    newLink: 'New Link'
  }
}

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

const portuguese = {
  insertImage: {
    getLinkUrlFromUser: 'Qual é a URL/caminho da imagem que você deseja exibir?',
    getLinkTextFromUser: 'Qual deve ser o texto de referência para essa URL?'
  },
  insertLink: {
    getLinkUrlFromuser: 'Qual é a URL para onde esse link seá referenciado?',
    getLinkTextFromUser: 'Qual será o texto de referência dessa URL?'
  },
  standard: {
    selectedEditFail: 'O texto selecionado não pode ser editado, por favor tente novamente.',
    emptyEditFail: 'O texto não foi edtiado, por favor tente novamente.',
    invalidUrl: 'Por favor informe uma URL válida.',
    invalidReferenceText: 'Por favor preencha a String.',
    newLink: 'Novo link'
  }
}

const french = {
  insertImage: {
    getLinkUrlFromUser: 'Quel est l\'URL/path de l\'image que vous voudriez afficher?',
    getLinkTextFromUser: 'Que devrait être le text de référence pour l\'URL de cette image?'
  },
  insertLink: {
    getLinkUrlFromuser: 'Vers quel URL ce liens devrait-il pointer?',
    getLinkTextFromUser: 'Que devrait être le texte de référence pour cet URL?'
  },
  standard: {
    selectedEditFail: 'Le texte sélectionné n\'a pas pu être modifié avec succès, essayez encore SVP.',
    emptyEditFail: 'Le texte n\'a pas pu être modifié avec succès, essayez encore SVP.',
    invalidUrl: 'Fournissez un URL valide SVP.',
    invalidReferenceText: 'Por favor, proporcione una cadena no vacía.',
    newLink: 'Nouveau liens'
  }
}

const german = {
  insertImage: {
    getLinkUrlFromUser: 'Wie lautet der pfad zum Bild den Sie anzeigen wollen?',
    getLinkTextFromUser: 'Was soll der Referenztext zu diesem Bild URL sein?'
  },
  insertLink: {
    getLinkUrlFromuser: 'Auf welcher URL soll dieser Link anzeigen?',
    getLinkTextFromUser: 'Was soll der Referenztext für dieser URL sein?'
  },
  standard: {
    selectedEditFail: 'Der ausgewählte Text könnte nicht erfolgreich bearbeitet werden, bitte versuchen Sie erneut.',
    emptyEditFail: 'Der Text könnte nicht erfolgreich bearbeitet werden, bitte versuchen Sie erneut.',
    invalidUrl: 'Bite geben Sie ein gültigen URL ein.',
    invalidReferenceText: 'Bitte geben Sie mindestens ein Zeichen ein, der text kann nicht leer sein.',
    newLink: 'Neue Verknüpfung'
  }
}

const slovenian = {
  insertImage: {
    getLinkUrlFromUser: 'Kakšen je URL do podobe, ki jo želite prikazati?',
    getLinkTextFromUser: 'Kakšno naj bo besedilo za sklicevanje za URL te podobe?'
  },
  insertLink: {
    getLinkUrlFromuser: 'Kakšen je URL na katereka kaže ta povezava?',
    getLinkTextFromUser: 'Kakšno naj bo sklicevalno besedilo za ta URL?'
  },
  standard: {
    selectedEditFail: 'Izbrano besedilo ni bilo uspešno urejeno, prosim poskusite znova.',
    emptyEditFail: 'Besedilo ni bilo uspešno urejeno, prosim poskusite znova.',
    invalidUrl: 'Prosim podajte veljaven URL.',
    invalidReferenceText: 'Prosim podajte vsaj eno črko, besedilo ne more biti prazno.',
    newLink: 'Nova povezava'
  }
}
// #endregion Completed Language Data

const sTools = require('./StdTools')
const props = require('./Properties')

const lang = sTools.getConfigProperty(props.displayLanguage)

/**
 * Gets the text value for the current language using the provided category and
 * key parameters.
 *
 * @param {String} category The category/command you want to pull the String from
 * @param {String} key The key for the String you want the value of.
 */
const getText = (category, key) => {
  switch (lang.toLowerCase()) {
    case 'english': return english[category][key]
    case 'spanish': return spanish[category][key]
    case 'french': return french[category][key]
    case 'portuguese': return portuguese[category][key]
    case 'german': return german[category][key]
    case 'slovenian': return slovenian[category][key]

    default: return undefined
  }
}

module.exports.getText = getText
