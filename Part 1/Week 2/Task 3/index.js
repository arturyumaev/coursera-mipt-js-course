// Телефонная книга
var storage = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

function handleAdd(user, phones) {
    storage[user] = !storage.hasOwnProperty(user)
        ? phones.split(',')
        : [...storage[user], ...phones.split(',')]
}

function handleRemovePhone(phone) {
    var removedSuccessfully = false;

    Object.keys(storage).map(name => {
        if (storage[name].includes(phone)) {
            storage[name] = storage[name].filter(p => p != phone)
            removedSuccessfully = true
        }
    })

    return removedSuccessfully
}

function handleShow() {
    return Object.keys(storage)
        .filter(name => storage[name].length != 0)
        .map(name => `${name}: ${storage[name].join(', ')}`)
        .sort()
}

module.exports = function(command) {
    var [cmd, arg2, arg3] = command.split(' ')

    switch (cmd) {
        case 'ADD':
            handleAdd(user = arg2, phones = arg3)
            break
        case 'REMOVE_PHONE':
            return handleRemovePhone(phone = arg2)
        case 'SHOW':
            return handleShow()
    }
        
};