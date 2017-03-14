import Node from "./Node";
import ObservableList from "./common/ObservableList";

class Pane extends Node {
    constructor(nodes) {
        super();

        this.__children = new ObservableList();
        this.__children.addListener((object, action) => {
            switch (action) {
                case 'clear':
                    this.dom.html('');
                    break;

                case 'add':
                    this.dom.append(this.createSlotDom(object));
                    break;

                case 'remove':
                    var slot = object.dom.data('--slot-dom');

                    if (slot instanceof jQuery) {
                        object.data('--slot-dom', null);
                        slot.remove();
                    } else {
                        object.free();
                    }

                    break;
            }
        });

        this.add(arguments);
    }

    get children() {
        return this.__children;
    }

    createSlotDom(object) {
        var dom = jQuery('<div/>').append(object.dom);
        dom.data('--wrapper', object);
        object.dom.data('--slot-dom', dom);
        return dom;
    }

    createDom() {
        var dom = jQuery('<div></div>');
        return dom;
    }

    add(nodes) {
        this.children.add(...arguments);
    }

    remove(nodes) {
        this.children.remove(...arguments);
    }

    clear() {
        this.children.clear();
    }
}

export default Pane;
