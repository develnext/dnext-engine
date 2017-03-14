
/**
 * Base HTML Node class.
 **/
class Node {
    constructor(dom) {
        if (dom === undefined) {
            this.dom = this.createDom();

            if (!(this.dom instanceof jQuery)) {
                throw new Error("Method createDom() must return instance of an jQuery object");
            }
        } else {
            if (dom instanceof jQuery) {
                this.dom = dom;
            } else {
                throw new Error("Non-jquery object cannot be passed into Node.construct()");
            }
        }

        this.dom.data('--wrapper', this);
    }

    get id() { return this.dom.attr('id') }
    set id(value) { this.dom.attr('id', value) }

    get style() { return this.dom.attr('style') }
    set style(value) { this.dom.attr('style', value) }

    get x() { return this.dom.position().left; }
    set x(value) { this.dom.css({left: value}); }

    get y() { return this.dom.position().top; }
    set y(value) {
        this.dom.css({top: value});
    }

    get position() { return [this.x, this.y]; }
    set position(value) {
        if (value instanceof Array && value.length >= 2) {
            this.x = value[0];
            this.y = value[1];
        }
    }

    get width() { return this.dom.width() }
    set width(value) { this.dom.width(value) }

    get height() { return this.dom.height() }
    set height(value) { this.dom.height(value) }

    get size() { return [this.width, this.height] }
    set size(value) {
        if (value instanceof Array && value.length >= 2) {
            this.width = value[0];
            this.height = value[1];
        }
    }

    get parent() {
        return Node.getFromDom(this.dom.parent());
    }

    createDom() {
        throw new Error("Cannot call abstract method createDom()");
    }

    lookup(selector) {
      var dom = this.dom.find(selector).first();

      if (dom.length()) {
        return Node.getFromDom(dom);
      }

      return null;
    }

    lookupAll(selector) {
      var nodes = [];

      this.dom.find(selector).each(() => {
        nodes.push(Node.getFromDom(this));
      });

      return nodes;
    }

    free() {
        this.dom.detach();
    }

    on(event, callback) {
        this.dom.on(event, callback);
    }

    off(event) {
        this.dom.off(event);
    }

    trigger(event, params) {
        this.dom.trigger(event, params);
    }

    static getFromDom(jqueryObject) {
        if (jqueryObject === null) {
            return null;
        }

        if (jqueryObject instanceof jQuery) {
            var wrapper =  jqueryObject.data('--wrapper');
            return wrapper ? wrapper : new Node(jqueryObject);
        }

        throw new Error("Node.getFromDom(): 1 argument must be an jQuery object");
    }
}

export default Node;
