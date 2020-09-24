var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
	{
        name: 'Саша',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
	{
        name: 'Алекс',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Морковь'
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

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query() {
	console.log(arguments)
}

/**
 * @params {String[]}
 */
function select() {
	return ['select', arguments];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, ...values) {
	return ['filterIn', property, ...values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

var bestFriends = query(
  friends,
  select('name', 'gender', 'email'),
  filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);

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


/*
[
  { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
  { name: 'Эмили', gender: 'Женский', email: 'roachpugh@example.com' }
]
*/