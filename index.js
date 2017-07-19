window.subscritors = {}

export const subscribe = (subscriptor, callback) => {
    window.subscritors[subscriptor] = callback
};

export const publish = (subscriptor, message) => {
    let properties = Object.getOwnPropertyNames(window.subscritors);
    for (let index = 0; index < properties.length; index++) {
        if (subscriptor === properties[index])
            window.subscritors[properties[index]](message);
    }
}