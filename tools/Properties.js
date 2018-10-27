/**
 * The enum that represents the options available within Enmeti. An enum is used
 * in order to ensure I don't request an option or property that doesn't exist
 * or simple typos, such as 'insertOnEmptySeelection' as opposed to
 * 'insertOnEmptySelection' which would throw some errors that might not be
 * immediately noticable.
 *
 * @readonly
 * @enum {string}
 */
module.exports = {
  handleEmptySelection: 'insertOnEmptySelection',
  displayLanguage: 'displayLanguage',
  referenceSection: 'addLinkToReferenceSection'
}
