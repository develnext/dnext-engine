import Container from './Container';

class VBox extends Container {

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

    slots.css('margin-bottom', value + 'px');
    slots.last().css('margin-bottom', 0);
  }


    get horAlign() {
      var align = this.dom.css('align-items');

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

      this.dom.css('align-items', value);
    }

    get verAlign() {
      var align = this.dom.css('justify-content');

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

      this.dom.css('justify-content', value);
    }

  createDom() {
    var dom = super.createDom();
    dom.addClass('ux-v-box');

    return dom;
  }

  createSlotDom(object) {
    var dom = super.createSlotDom(object);
    return dom;
  }
}

export default VBox;
