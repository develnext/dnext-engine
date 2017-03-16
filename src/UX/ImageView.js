import Node from './Node';

class ImageView extends Node {

  constructor(image) {
    super();

    if (image !== undefined) {
      this.source = image;
    }

    this.proportional = true;
  }

  get source() {
    return this.dom.css('background-image');
  }

  set source(value) {
    this.dom.css({'background-image': `url('${value}')`});
  }

  get centered() {
    return this.dom.css('background-position') === '50% 50%';
  }

  set centered(value) {
    this.dom.css('background-position', value ? '50% 50%' : '0 0');
  }

  get displayType() {
    switch (this.dom.css('background-size')) {
      case '100% 100%': return 'filled';
      case 'cover': return 'cropped';
      case 'resized': return 'resized';
      case 'auto auto': return 'origin';

      default:
        return '';
    }
  }

  set displayType(type) {
    switch (type.toString().toLowerCase()) {
      case 'filled':
        this.dom.css('background-size', `100% 100%`);
        break;
      case 'cropped':
        this.dom.css('background-size', 'cover');
        break;
      case 'resized':
        this.dom.css('background-size', 'contain');
        break;
      case 'origin':
        this.dom.css('background-size', 'auto auto');
        break;
    }
  }

  createDom() {
    var dom = jQuery('<div></div>');
    dom.addClass('ux-image-view');

    dom.css({
      display: 'inline-block',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: '0 0'
    });
    return dom;
  }
}

export default ImageView;
