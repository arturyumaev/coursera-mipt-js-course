/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    return  [...new Set(hashtags.map(ht => ht.toLowerCase()))].join(', ')
};