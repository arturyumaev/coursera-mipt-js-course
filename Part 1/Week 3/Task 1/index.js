/**
 * @param {String} date
 * @returns {Object}
 */

var dt = null

const objHandler = {
  'years': (n, sign) => {
    dt.setFullYear(dt.getFullYear() + sign * n)
  },
  'months': (n, sign) => {
    dt.setMonth(dt.getMonth() + sign * n)
  },
  'days': (n, sign) => {
    dt.setDate(dt.getDate() + sign * n)
  },
  'hours': (n, sign) => {
    if (n == 24 && sign == -1) dt.setDate(dt.getDate() - 1)
    dt.setHours(dt.getHours() + sign * n)
  },
  'minutes': (n, sign) => {
    dt.setMinutes(dt.getMinutes() + sign * n)
  }
}

const handleMath = (n, sign, type) => {
  objHandler[type](n, sign)
}

const typeError = () => {
  throw new TypeError()
}

module.exports = function(date) {
  dt = new Date(date)
  dt.setMinutes(dt.getMinutes() + Math.abs(dt.getTimezoneOffset()));
  
  return {
    add: function (n, type) {
        n < 0 || !Object.keys(objHandler).includes(type) || isNaN(n)
          ? typeError()
          : handleMath(n, 1, type)
        return this;
    },
    subtract: function (n, type) {
        n < 0 || !Object.keys(objHandler).includes(type) || isNaN(n)
          ? typeError()
          : handleMath(n, -1, type)
        return this;
    },
    get value() {
      var [dt1, dt2] = dt.toISOString().split('T')
      return `${dt1} ${dt2.slice(0, 5)}` 
    }
  }
};