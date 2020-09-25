module.exports = {
    events: {},
    on: function (event, subscriber, handler) {
        if (!Object.keys(this.events).includes(event))
            this.events[event] = []

        this.events[event].push([subscriber, handler])

        return this
    },
    off: function (event, subscriber) {
        if (Object.keys(this.events).includes(event))
            this.events[event] = this.events[event].filter(subPair => subPair[0] != subscriber)

        return this
    },
    emit: function (event) {
        if (Object.keys(this.events).includes(event)) {
            this.events[event].map((subPair) => {
                var [subscriber, handler] = subPair

                handler.call(subscriber)
            })
        }

        return this
    }
};
