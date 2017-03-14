import Node from './Node';

class Labeled extends Node {
    constructor(text) {
        super();
        this.text = text;
    }

    get text() {
        return this.dom.text();
    }

    set text(value) {
        this.dom.text(value);
    }
}

export default Labeled;
