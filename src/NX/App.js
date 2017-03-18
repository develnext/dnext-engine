import Utils from './../UX/util/Utils';
import Container from './../UX/Container';
import Node from './../UX/Node';

import Logger from './Logger';
import UILoader from './UILoader';

class App {
  constructor(domElement) {
    this.logger = new Logger();
    this.uiLoader = new UILoader();
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
      if (node) {
        throw new Error("Content property: must be instance of Node, " + (node.constructor ? node.constructor.name : typeof node) + " given");
      } else {
        throw new Error("Content property: must be instance of Node, undefined given");
      }
    }
  }

  load(object) {
    this.content = this.uiLoader.load(object);
  }

  loadUrl(url) {
    this.content = this.uiLoader.loadFromUrl(url);
  }

  log(message) {
    this.logger.info(message);
  }
}

export default App;
