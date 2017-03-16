import Labeled from './Labeled';


class Label extends Labeled {

  createDom() {
      var dom = jQuery('<span></span>');
      dom.addClass('ux-label');
      dom.addClass('label');
      return dom;
  }
}

export default Label;
