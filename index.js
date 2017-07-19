window.subscritors = {}

const subscribe = (subscriptor, callback) => {
    window.subscritors[subscriptor] = callback
};

const publish = (message) => {
    let properties = Object.Keys(window.subscritors);
    for (let index = 0; index < properties.length; index++) {
        window.subscritors[properties[index]](message);
    }
}

module.export = {
    subscribe: subscribe,
    publish: publish
}