import Labeled from './Labeled';

class Button extends Labeled {

    createDom() {
        var dom = jQuery('<button><span class="ux-labeled-text"></span></button>');
        dom.addClass('ux-labeled');
        dom.addClass('ux-button');

        dom.addClass('btn');
        dom.addClass('btn-default');

        return dom;
    }
}

export default Button;
