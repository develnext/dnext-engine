import Labeled from './Labeled';

class Button extends Labeled {

    createDom() {
        var dom = jQuery('<button></button>');
        dom.addClass('ux-button');
        
        dom.addClass('btn');
        dom.addClass('btn-default');

        return dom;
    }
}

export default Button;
