import Labeled from './Labeled';

class Checkbox extends Labeled {
  createDom() {
      var dom = jQuery('<label><input type="checkbox"> <span></span></label>');
      dom.addClass('ux-checkbox');
      return dom;
  }

  get text() {
    switch (this.textType) {
      case 'text':
        return this.dom.find('> span').text();
      case 'html':
        return this.dom.find('> span').html();
    }

    return '';
  }

  set text(value) {
    switch (this.textType) {
      case 'text':
        this.dom.find('> span').text(value);
        break;

      case 'html':
        this.dom.find('> span').html(value);
        break;
    }
  }

  get checked() {
    return this.dom.find('> input[type=checkbox]').prop('checked');
  }

  set checked(value) {
    this.dom.find('> input[type=checkbox]').prop('checked', value);
  }

  get selected() {
    return this.checked;
  }

  set selected(value) {
    this.checked = value;
  }
}

export default Checkbox;
