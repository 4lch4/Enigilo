/**
 * The default Strings class, created so Enmeti can be translated into various
 * languages. To use the class, create a new instance with only one value passed
 * to the constructor, which language you wish to use. The currently supported
 * languages are:
 *
 * - English
 */
class Strings {
  /**
   * The default constructor of the Strings class which accepts only one
   * parameter, the name of the language you wish to use (case-insensitive).
   *
   * @param {String} lang The language you wish to receive strings in.
   */
  constructor (lang) {
    switch (lang.toLowerCase()) {
      case 'english': this.lang = require('./strings/en_US'); break
      case 'spanish': this.lang = require('./strings/es_US'); break
    }
  }

  getText (category, key) {
    return this.lang[category][key]
  }
}

module.exports = Strings
