/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {

}

/**
 * @params {String[]}
 */
function select() {

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'roachpugh@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        weight: '16'
    }
];

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

console.info(s(friends, ['name', 'gender', 'email', 'width']))

