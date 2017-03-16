import Node from './Node';
import Font from './paint/Font';

class Labeled extends Node {
    constructor(text, graphic) {
        super();
        this.textType = 'text';
        this.graphic = graphic;
        this.text = text;
    }

    get font() {
      return Font.getFromDom(this.dom);
    }

    set font(value) {
      Font.applyToDom(value);
    }

    get text() {
      switch (this.textType) {
        case 'text':
          return this.dom.text();
        case 'html':
          return this.dom.html();
      }

      return '';
    }

    set text(value) {
      switch (this.textType) {
        case 'text':
          this.dom.text(value);
          break;

        case 'html':
          this.dom.html(value);
          break;
      }
    }

    get textColor() {
      return this.dom.css('color');
    }

    set textColor(value) {
      this.dom.css('color', value ? value : '');
    }

    get textType() {
      return this._textType;
    }

    set textType(value) {
      var text = this.text;

      if (value) {
        this._textType = value.toString().toLowerCase();
      } else {
        this._textType = 'text';
      }

      this.text = text;
    }

    get graphic() {
      return Node.getFromDom(this.dom.find('.ux-graphic > *').first());
    }

    set graphic(node) {
      if (!node) {
        this.dom.find('.ux-graphic').remove();
      } else {
        var dom = jQuery('<span classs="ux-graphic"></span>').append(node);
        this.dom.find('.ux-graphic').replace(dom);
      }
    }
}

export default Labeled;
