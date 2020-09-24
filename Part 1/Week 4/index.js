function query() {
  var data = [...arguments['0']]
  var keys = Object.keys(arguments).filter(k => k != '0')

  for (var k of keys) {
    if (arguments[k][0] == 'filterIn')
      data = f(data, arguments[k][1], arguments[k][2])
  }

  for (var k of keys) {
    if (arguments[k][0] == 'select')
      data = s(data, Object.keys(arguments[k][1]).map(ind => arguments[k][1][ind]))
  }

  return data
}

function select() {
  return ['select', arguments];
}

function filterIn(property, ...values) {
  return ['filterIn', property, ...values];
}

const s = (data, cols) => (
  [...data].map(obj => (
    Object
      .keys(obj)
      .filter(key => cols.includes(key))
      .reduce((prev, k) => {
        prev[k] = obj[k]
        return prev
      }, {})
  )).filter(obj => Object.keys(obj).length)
)

const f = (data, field, values) => (
  [...data].filter(
    obj => obj[field] && values.includes(obj[field])
  )
)

module.exports = {
  query: query,
  select: select,
  filterIn: filterIn
}