import Node from "./Node";

class Container extends Node {
  constructor(nodes) {
      super();
      this.add(...arguments);
  }

  get align() {
    return [this.horAlign, this.verAlign];
  }

  set align(value) {
    if (value instanceof Array && value.length >= 2) {
      this.horAlign = value[0];
      this.verAlign = value[1];
    }
  }

  get horAlign() {
    return this.dom.css('text-align');
  }

  set horAlign(value) {
    this.dom.css('text-align', value);
  }

  get verAlign() {
    var align = this.dom.css('justify-content')
    return align ? align : 'top';
  }

  set verAlign(value) {
    this.dom.css('justify-content', value);
  }

  createSlotDom(object) {
    if (!(object instanceof Node)) {
      throw new TypeError('createSlotDom(): 1 argument must be instance of Node')
    }

    var dom = jQuery('<div/>').append(object.dom);
    dom.addClass('ux-slot');

    dom.data('--wrapper', object);
    object.dom.data('--wrapper-dom', dom);
    return dom;
  }

  createDom() {
    var dom = jQuery('<div></div>');
    dom.addClass('ux-container');

    return dom;
  }

  child(id) {
    var dom = this.dom.find(`#${id}`);

    if (dom && dom.length) {
      return Node.getFromDom(dom);
    }

    return null;
  }

  children() {
    var children = [];

    this.dom.children().each(function () {
      children.push(Node.getFromDom(jQuery(this)));
    });

    return children;
  }

  add(nodes) {
    for (var i = 0; i < arguments.length; i++) {
      this.dom.append(this.createSlotDom(arguments[i]));
    }

    return this;
  }

  insert(index, nodes) {
    index = index | 0;

    var children = this.dom.children();

    if (!children.length || index >= children.length) {
      return this.add(...Array.prototype.slice.call(arguments, 1));
    }

    nodes = Array.prototype.slice.call(arguments, 1);

    var i = 0;
    var self = this;

    this.dom.children().each(function () {
      if (index === i) {
        for (var k = 0; k < nodes.length; k++) {
          var slot = self.createSlotDom(nodes[k]);
          slot.insertBefore(this);
        }

        return false;
      }

      i++;
    });

    return this;
  }

  clear() {
    this.dom.empty();
  }
}

export default Container;
