import TextInputControl from './TextInputControl';

class TextArea extends TextInputControl {
  createDom() {
    var dom = jQuery('<textarea class="form-control ux-text-input-control ux-text-area" />');
    return dom;
  }
}

export default TextArea;
