import Container from './Container';

class HBox extends Container {

  constructor(nodes) {
    super(...arguments);

    this.spacing = 0;
  }

  get spacing() {
    return this._spacing;
  }

  set spacing(value) {
    this._spacing = value;
    var slots = this.dom.find('> div');

    slots.css('margin-right', value + 'px');
    slots.last().css('margin-right', 0);
  }

  get horAlign() {
    var align = this.dom.css('justify-content');

    switch (align) {
      case 'flex-start': return 'left';
      case 'flex-end': return 'right';
    }

    return align;
  }

  set horAlign(value) {
    switch (value) {
      case 'left':
        value = 'flex-start'; break;
      case 'right':
        value = 'flex-end'; break;
    }

    this.dom.css('justify-content', value);
  }

  get verAlign() {
    var align = this.dom.css('align-items');

    switch (align) {
      case 'flex-start': return 'top';
      case 'flex-end': return 'bottom';
    }

    return align ? align : 'top';
  }

  set verAlign(value) {
    switch (value) {
      case 'top':
        value = 'flex-start'; break;
      case 'bottom':
        value = 'flex-end'; break;
    }

    this.dom.css('align-items', value);
  }

  createDom() {
    var dom = super.createDom();
    dom.addClass('ux-h-box');

    return dom;
  }

  createSlotDom(object) {
    var dom = super.createSlotDom(object);
    return dom;
  }

  add(nodes) {
    super.add(...arguments);
    this.spacing = this.spacing;
  }

  insert(index, nodes) {
    super.insert(...arguments);
    this.spacing = this.spacing;
  }
}

export default HBox;
