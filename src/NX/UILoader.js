import Node from './../UX/Node';
import Container from './../UX/Container';

class UILoader {

  load(object) {
    if (object && typeof object === "object") {
      const type = object['*'];

      if (!type) {
        throw new Error("Type is not defined in '*' property!");
      }

      const cls = UX[type];

      if (!cls) {
        throw new Error(`Type '${type}' is not defined`);
      }

      const node = new cls();
      cls.call(node);

      if (node instanceof Node) {
        node.load(object);

        if (node instanceof Container && jQuery.isArray(object['children'])) {
          const children = object['children'];

          for (var i = 0; i < children.length; i++) {
            const child = this.load(children[i]);
            node.add(child);
          }
        }

        return node;
      } else {
        throw new Error(`Type '${type}' is not UI component class`);
      }
    }
  }

  loadFromJson(jsonString) {
    return this.load(JSON.parse(jsonString));
  }

  loadFromUrl(urlToJson, callback) {
    $.get(urlToJson, (data) => {
        this.load(data);

        if (callback) {
          callback();
        }
    });
  }
}

export default UILoader;
