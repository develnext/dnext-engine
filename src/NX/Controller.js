import Container from './../UX/Container';

class UI {

  constructor(node) {
    this._node = node;

    this.refresh(node);
  }

  refresh(node) {
    if (node instanceof Container) {
      var children = node.children();

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child) {
          var id = child.id;

          if (id && !this[id]) {
            this[id] = child;
            this.refresh(child);
          }
        }
      }
    }
  }
}

export default function controller(handlers) {
  return function (node) {
    var self = this;

    this.node = node;
    this.handlers = handlers;
    this.ui = new UI(node);

    var init = function () {
      for (var id in handlers) {
        if (handlers.hasOwnProperty(id)) {
          var sub = node.child(id);

          if (sub) {
            self.bind(sub, handlers[id]);
          } else {
            console.warn(`Child '${id}' is not defined`);
          }
        }
      }
    };

    this.bind = function (node, handlers) {
      for (var event in handlers) {
        if (handlers.hasOwnProperty(event)) {
          node.on(event, (e) => {
            e.ui = self.ui;
            handlers[event].call(self, e);
          });
        }
      }
    }

    init();
  };
}
