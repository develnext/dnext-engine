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

  createDom() {
    var dom = super.createDom();
    dom.addClass('ux-v-box');

    return dom;
  }

  createSlotDom(object) {
    var dom = super.createSlotDom(object);
    dom.css('display', 'block');
    return dom;
  }
}

export default VBox;
