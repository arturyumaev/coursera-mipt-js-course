class Collection {
  constructor(data) {
    this.data = data ? data : []
  }

  count() {
    return this.data.length
  }

  values() {
    return this.data
  }

  at(index) {
    var value = this.data[index - 1]

    return value ? value : null
  }

  append(value) {
    if (Array.isArray(value)) {
      this.data = [...this.data, ...value]
    }
    else if (value instanceof Collection) {
      this.data = [...this.data, ...value.data]
    } else {
      this.data.push(value)
    }
  }

  removeAt(index) {
    if (this.at(index)) {
      this.data.splice(index - 1, 1)

      return true
    }

    return false
  }
}

Collection.from = data => {
  return new Collection(data)
}

module.exports = Collection