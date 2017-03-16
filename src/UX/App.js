import Utils from './util/Utils';
import Container from './Container';
import Node from './Node';

import Logger from './../NX/Logger';

class App {
  constructor(domElement) {
    this.logger = new Logger();
    this._content = null;

    if (Utils.isElement(domElement)) {
      this.dom = jQuery(domElement);
    } else {
      if (domElement instanceof jQuery) {
        this.dom = domElement;
      } else {
        this.dom = jQuery(document).find(domElement).first();
      }
    }
  }

  get content() {
    return this._content;
  }

  set content(node) {
    this.dom.empty();

    if (node instanceof Node) {
      this._content = node;
      this.dom.append(node.dom);
    } else if (node === null) {
      this._content = null;
    } else {
      throw new Error("Content property: must be instance of Node, " + node.constructor.name + " given");
    }
  }

  log(message) {
    this.logger.info(message);
  }
}

export default App;
