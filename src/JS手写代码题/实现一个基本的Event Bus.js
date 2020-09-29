class EventEmitter {
    constructor() {
        this.events = this.events || new Map();
    }
    addListener(type, fn) {
        if (!this.events.get(type)) {
            this.events.set(type, fn);
        }
    }
    emit(type) {
        let handle = this.events.get(type);
        handle.apply(this, [...arguments].slice(1));
    }
}
let emitter = new EventEmitter();
emitter.addListener('age', (age) => {
    console.log(age);
});
emitter.emit('age', 18);
