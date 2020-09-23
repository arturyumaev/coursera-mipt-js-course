/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var hoursToAdd = Math.floor(interval / 60);

    var totalMinutes = minutes + interval % 60;
    var totalHours = (hours + hoursToAdd + Math.floor(totalMinutes / 60)) % 24;
    totalMinutes %= 60;

    return `${(totalHours < 10 ? '0' : '')}${totalHours}:${(totalMinutes < 10 ? '0' : '')}${totalMinutes}`;
};
