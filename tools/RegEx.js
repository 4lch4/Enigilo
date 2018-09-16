/** A regex statement to test if the string starts with a link reference. */
const urlStarterRegex = /\[\d+\]: /

/** A regex statement to test if the string is a valid url. */
const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,15}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|\d+/

module.exports.urlRegex = urlRegex
module.exports.urlStarterRegex = urlStarterRegex
