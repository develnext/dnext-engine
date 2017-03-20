import UILoader from './../NX/UILoader';
import Container from './Container';

class Page {
  constructor(uiResource) {
    this.uiLoader = new UILoader();
    this.ui = {};
    this._content = null;

    this.load(uiResource);
  }

  get content() {
    return this._content;
  }

  bindOne(id, handler) {
    if (this._binds) {
      this._binds[id] = handler;
    } else {
      this._binds = {}
      this._binds[id] = handler;
    }

    if (this._content) {
      var sub = this._content.child(id);

      if (sub) {
        for (var event in handler) {
          if (handler.hasOwnProperty(event)) {
            sub.on(event, (e) => {
              handler[event].call(this, e);
            });
          }
        }
      } else {
        console.warn(`Child '${id}' is not defined`);
      }
    }
  }

  bind(handlers) {
    this._binds = handlers;

    if (this._content) {
      for (var id in handlers) {
        if (handlers.hasOwnProperty(id)) {
          this.bindOne(id, handlers[id]);
        }
      }
    }
  }

  load(uiResource) {
    if (uiResource instanceof String || typeof uiResource === 'string') {
      this.uiLoader.loadFromUrl(uiResource, (node) => {
          this._content = node;
          this.afterLoad();
      }, this);
    } else {
      this._content = this.uiLoader.load(uiResource, this);
      this.afterLoad();
    }
  }

  afterLoad() {
    if (this._binds) {
      this.bind(this._binds);
    }

    this._refreshUi();

    if (this._app) {
      this._app.content = this._content;
    }
  }

  _refreshUi() {
    this.ui = {};

    var self = this;

    const refresh = function (node) {
      if (node instanceof Container) {
        var children = node.children();

        for (var i = 0; i < children.length; i++) {
          var child = children[i];

          if (child) {
            var id = child.id;

            if (id && !self.ui[id]) {
              self.ui[id] = child;
              refresh(child);
            }
          }
        }
      }
    }

    refresh(this._content);

    if (this._app) {
      window.ui = this.ui;
    }
  }

  showInApp(app) {
    this._app = app;

    if (this._content) {
      app.content = this._content;
      window.ui = this.ui;
    }
  }
}

export default Page;
