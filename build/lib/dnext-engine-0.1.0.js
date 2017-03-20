(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"E:\\apps\\ux-engine\\src\\NX\\App.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = require('./../UX/util/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Container = require('./../UX/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Node = require('./../UX/Node');

var _Node2 = _interopRequireDefault(_Node);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _UILoader = require('./UILoader');

var _UILoader2 = _interopRequireDefault(_UILoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(domElement) {
    _classCallCheck(this, App);

    this.logger = new _Logger2.default();
    this.uiLoader = new _UILoader2.default();
    this._content = null;

    if (_Utils2.default.isElement(domElement)) {
      this.dom = jQuery(domElement);
    } else {
      if (domElement instanceof jQuery) {
        this.dom = domElement;
      } else {
        this.dom = jQuery(document).find(domElement).first();
      }
    }
  }

  _createClass(App, [{
    key: 'showPage',
    value: function showPage(page) {
      page.showInApp(this);
    }
  }, {
    key: 'log',
    value: function log(message) {
      this.logger.info(message);
    }
  }, {
    key: 'content',
    get: function get() {
      return this._content;
    },
    set: function set(node) {
      this.dom.empty();

      if (node instanceof _Node2.default) {
        this._content = node;
        this.dom.append(node.dom);
      } else if (node === null) {
        this._content = null;
      } else {
        if (node) {
          throw new Error("Content property: must be instance of Node, " + (node.constructor ? node.constructor.name : typeof node === 'undefined' ? 'undefined' : _typeof(node)) + " given");
        } else {
          throw new Error("Content property: must be instance of Node, undefined given");
        }
      }
    }
  }]);

  return App;
}();

exports.default = App;

},{"./../UX/Container":"E:\\apps\\ux-engine\\src\\UX\\Container.js","./../UX/Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js","./../UX/util/Utils":"E:\\apps\\ux-engine\\src\\UX\\util\\Utils.js","./Logger":"E:\\apps\\ux-engine\\src\\NX\\Logger.js","./UILoader":"E:\\apps\\ux-engine\\src\\NX\\UILoader.js"}],"E:\\apps\\ux-engine\\src\\NX\\Controller.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = controller;

var _Container = require('./../UX/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
  function UI(node) {
    _classCallCheck(this, UI);

    this._node = node;

    this.refresh(node);
  }

  _createClass(UI, [{
    key: 'refresh',
    value: function refresh(node) {
      if (node instanceof _Container2.default) {
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
  }]);

  return UI;
}();

function controller(handlers) {
  return function (node) {
    var self = this;

    this.node = node;
    this.handlers = handlers;
    this.ui = new UI(node);

    var init = function init() {
      for (var id in handlers) {
        if (handlers.hasOwnProperty(id)) {
          var sub = node.child(id);

          if (sub) {
            self.bind(sub, handlers[id]);
          } else {
            console.warn('Child \'' + id + '\' is not defined');
          }
        }
      }
    };

    this.bind = function (node, handlers) {
      for (var event in handlers) {
        if (handlers.hasOwnProperty(event)) {
          node.on(event, function (e) {
            e.ui = self.ui;
            handlers[event].call(self, e);
          });
        }
      }
    };

    init();
  };
}

},{"./../UX/Container":"E:\\apps\\ux-engine\\src\\UX\\Container.js"}],"E:\\apps\\ux-engine\\src\\NX\\Logger.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  _createClass(Logger, null, [{
    key: "DEBUG",
    get: function get() {
      return 1;
    }
  }, {
    key: "INFO",
    get: function get() {
      return 10;
    }
  }, {
    key: "WARNING",
    get: function get() {
      return 100;
    }
  }, {
    key: "ERROR",
    get: function get() {
      return 1000;
    }
  }]);

  function Logger() {
    _classCallCheck(this, Logger);

    this.level = Logger.INFO;
  }

  _createClass(Logger, [{
    key: "debug",
    value: function debug(message) {
      if (this.level >= Logger.DEBUG) {
        var _console;

        (_console = console).debug.apply(_console, arguments);
      }
    }
  }, {
    key: "info",
    value: function info(message) {
      if (this.level >= Logger.INFO) {
        var _console2;

        (_console2 = console).info.apply(_console2, arguments);
      }
    }
  }, {
    key: "error",
    value: function error(message) {
      if (this.level >= Logger.ERROR) {
        var _console3;

        (_console3 = console).error.apply(_console3, arguments);
      }
    }
  }, {
    key: "warn",
    value: function warn(message) {
      if (this.level >= Logger.WARNING) {
        console.warn(message);
      }
    }
  }]);

  return Logger;
}();

exports.default = Logger;

},{}],"E:\\apps\\ux-engine\\src\\NX\\NX.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _Controller = require('./Controller');

var _Controller2 = _interopRequireDefault(_Controller);

var _UILoader = require('./UILoader');

var _UILoader2 = _interopRequireDefault(_UILoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  App: _App2.default, Logger: _Logger2.default, UILoader: _UILoader2.default,
  controller: _Controller2.default
};

},{"./App":"E:\\apps\\ux-engine\\src\\NX\\App.js","./Controller":"E:\\apps\\ux-engine\\src\\NX\\Controller.js","./Logger":"E:\\apps\\ux-engine\\src\\NX\\Logger.js","./UILoader":"E:\\apps\\ux-engine\\src\\NX\\UILoader.js"}],"E:\\apps\\ux-engine\\src\\NX\\UILoader.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = require('./../UX/Node');

var _Node2 = _interopRequireDefault(_Node);

var _Container = require('./../UX/Container');

var _Container2 = _interopRequireDefault(_Container);

var _UX = require('./../UX/UX');

var _UX2 = _interopRequireDefault(_UX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UILoader = function () {
  function UILoader() {
    _classCallCheck(this, UILoader);
  }

  _createClass(UILoader, [{
    key: 'load',
    value: function load(object, controller) {
      if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === "object") {
        var type = object['_'];

        if (!type) {
          throw new Error("Type is not defined in '_' property!");
        }

        var cls = _UX2.default[type];

        if (!cls) {
          throw new Error('Type \'' + type + '\' is not defined');
        }

        var node = new cls();

        if (node instanceof _Node2.default) {
          if (node instanceof _Container2.default && jQuery.isArray(object['_content'])) {
            var children = object['_content'];

            for (var i = 0; i < children.length; i++) {
              var child = this.load(children[i], controller);
              node.add(child);
            }
          }

          node.load(object, controller);

          return node;
        } else {
          throw new Error('Type \'' + type + '\' is not UI component class');
        }
      }
    }
  }, {
    key: 'loadFromJson',
    value: function loadFromJson(jsonString, controller) {
      return this.load(JSON.parse(jsonString), controller);
    }
  }, {
    key: 'loadFromUrl',
    value: function loadFromUrl(urlToJson, callback, controller) {
      var _this = this;

      jQuery.getJSON(urlToJson, function (data) {
        callback(_this.load(data, controller));
      });
    }
  }]);

  return UILoader;
}();

exports.default = UILoader;

},{"./../UX/Container":"E:\\apps\\ux-engine\\src\\UX\\Container.js","./../UX/Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js","./../UX/UX":"E:\\apps\\ux-engine\\src\\UX\\UX.js"}],"E:\\apps\\ux-engine\\src\\UX\\AnchorPane.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = require('./Container');

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnchorPane = function (_Container) {
  _inherits(AnchorPane, _Container);

  function AnchorPane() {
    _classCallCheck(this, AnchorPane);

    return _possibleConstructorReturn(this, (AnchorPane.__proto__ || Object.getPrototypeOf(AnchorPane)).apply(this, arguments));
  }

  _createClass(AnchorPane, [{
    key: 'createDom',
    value: function createDom() {
      var dom = _get(AnchorPane.prototype.__proto__ || Object.getPrototypeOf(AnchorPane.prototype), 'createDom', this).call(this);
      dom.addClass('ux-anchor-pane');
      return dom;
    }
  }, {
    key: 'createSlotDom',
    value: function createSlotDom(object) {
      object.dom.css('position', 'absolute');
      return object.dom;
    }
  }, {
    key: 'childToBack',
    value: function childToBack(object) {
      var dom = object.dom;
      dom.detach();

      this.dom.prepend(dom);
    }
  }, {
    key: 'childToFront',
    value: function childToFront(object) {
      var dom = object.dom;
      dom.detach();
      this.dom.append(dom);
    }
  }]);

  return AnchorPane;
}(_Container3.default);

exports.default = AnchorPane;

},{"./Container":"E:\\apps\\ux-engine\\src\\UX\\Container.js"}],"E:\\apps\\ux-engine\\src\\UX\\Button.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Labeled2 = require('./Labeled');

var _Labeled3 = _interopRequireDefault(_Labeled2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Labeled) {
    _inherits(Button, _Labeled);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'createDom',
        value: function createDom() {
            var dom = jQuery('<button><span class="ux-labeled-text"></span></button>');
            dom.addClass('ux-labeled');
            dom.addClass('ux-button');

            dom.addClass('btn');
            dom.addClass('btn-default');

            return dom;
        }
    }]);

    return Button;
}(_Labeled3.default);

exports.default = Button;

},{"./Labeled":"E:\\apps\\ux-engine\\src\\UX\\Labeled.js"}],"E:\\apps\\ux-engine\\src\\UX\\Checkbox.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Labeled2 = require('./Labeled');

var _Labeled3 = _interopRequireDefault(_Labeled2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Labeled) {
  _inherits(Checkbox, _Labeled);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'createDom',
    value: function createDom() {
      var dom = jQuery('<label><input type="checkbox"> <span class="ux-labeled-text"></span></label>');
      dom.addClass('ux-labeled');
      dom.addClass('ux-checkbox');
      return dom;
    }
  }, {
    key: 'checked',
    get: function get() {
      return this.dom.find('> input[type=checkbox]').prop('checked');
    },
    set: function set(value) {
      this.dom.find('> input[type=checkbox]').prop('checked', value);
    }
  }, {
    key: 'selected',
    get: function get() {
      return this.checked;
    },
    set: function set(value) {
      this.checked = value;
    }
  }]);

  return Checkbox;
}(_Labeled3.default);

exports.default = Checkbox;

},{"./Labeled":"E:\\apps\\ux-engine\\src\\UX\\Labeled.js"}],"E:\\apps\\ux-engine\\src\\UX\\Container.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Node) {
  _inherits(Container, _Node);

  function Container(nodes) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));

    _this.add.apply(_this, arguments);
    return _this;
  }

  _createClass(Container, [{
    key: 'createSlotDom',
    value: function createSlotDom(object) {
      if (!(object instanceof _Node3.default)) {
        throw new TypeError('createSlotDom(): 1 argument must be instance of Node');
      }

      var dom = jQuery('<div/>').append(object.dom);
      dom.addClass('ux-slot');

      dom.data('--wrapper', object);
      object.dom.data('--wrapper-dom', dom);
      return dom;
    }
  }, {
    key: 'createDom',
    value: function createDom() {
      var dom = jQuery('<div></div>');
      dom.addClass('ux-container');

      return dom;
    }
  }, {
    key: 'child',
    value: function child(id) {
      var dom = this.dom.find('#' + id);

      if (dom && dom.length) {
        return _Node3.default.getFromDom(dom);
      }

      return null;
    }
  }, {
    key: 'children',
    value: function children() {
      var children = [];

      this.dom.children().each(function () {
        children.push(_Node3.default.getFromDom(jQuery(this)));
      });

      return children;
    }
  }, {
    key: 'add',
    value: function add(nodes) {
      for (var i = 0; i < arguments.length; i++) {
        this.dom.append(this.createSlotDom(arguments[i]));
      }

      return this;
    }
  }, {
    key: 'insert',
    value: function insert(index, nodes) {
      index = index | 0;

      var children = this.dom.children();

      if (!children.length || index >= children.length) {
        return this.add.apply(this, _toConsumableArray(Array.prototype.slice.call(arguments, 1)));
      }

      nodes = Array.prototype.slice.call(arguments, 1);

      var i = 0;
      var self = this;

      this.dom.children().each(function () {
        if (index === i) {
          for (var k = 0; k < nodes.length; k++) {
            var slot = self.createSlotDom(nodes[k]);
            slot.insertBefore(this);
          }

          return false;
        }

        i++;
      });

      return this;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.dom.empty();
    }
  }, {
    key: 'align',
    get: function get() {
      return [this.horAlign, this.verAlign];
    },
    set: function set(value) {
      if (value instanceof Array && value.length >= 2) {
        this.horAlign = value[0];
        this.verAlign = value[1];
      }
    }
  }, {
    key: 'horAlign',
    get: function get() {
      return this.dom.css('text-align');
    },
    set: function set(value) {
      this.dom.css('text-align', value);
    }
  }, {
    key: 'verAlign',
    get: function get() {
      var align = this.dom.css('justify-content');
      return align ? align : 'top';
    },
    set: function set(value) {
      this.dom.css('justify-content', value);
    }
  }]);

  return Container;
}(_Node3.default);

exports.default = Container;

},{"./Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js"}],"E:\\apps\\ux-engine\\src\\UX\\HBox.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = require('./Container');

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HBox = function (_Container) {
  _inherits(HBox, _Container);

  function HBox(nodes) {
    _classCallCheck(this, HBox);

    var _this = _possibleConstructorReturn(this, (HBox.__proto__ || Object.getPrototypeOf(HBox)).apply(this, arguments));

    _this.spacing = 0;
    return _this;
  }

  _createClass(HBox, [{
    key: 'createDom',
    value: function createDom() {
      var dom = _get(HBox.prototype.__proto__ || Object.getPrototypeOf(HBox.prototype), 'createDom', this).call(this);
      dom.addClass('ux-h-box');

      return dom;
    }
  }, {
    key: 'createSlotDom',
    value: function createSlotDom(object) {
      var dom = _get(HBox.prototype.__proto__ || Object.getPrototypeOf(HBox.prototype), 'createSlotDom', this).call(this, object);
      return dom;
    }
  }, {
    key: 'add',
    value: function add(nodes) {
      _get(HBox.prototype.__proto__ || Object.getPrototypeOf(HBox.prototype), 'add', this).apply(this, arguments);
      this.spacing = this.spacing;
    }
  }, {
    key: 'insert',
    value: function insert(index, nodes) {
      _get(HBox.prototype.__proto__ || Object.getPrototypeOf(HBox.prototype), 'insert', this).apply(this, arguments);
      this.spacing = this.spacing;
    }
  }, {
    key: 'spacing',
    get: function get() {
      return this._spacing;
    },
    set: function set(value) {
      this._spacing = value;
      var slots = this.dom.find('> div');

      slots.css('margin-right', value + 'px');
      slots.last().css('margin-right', 0);
    }
  }, {
    key: 'horAlign',
    get: function get() {
      var align = this.dom.css('justify-content');

      switch (align) {
        case 'flex-start':
          return 'left';
        case 'flex-end':
          return 'right';
      }

      return align;
    },
    set: function set(value) {
      switch (value) {
        case 'left':
          value = 'flex-start';break;
        case 'right':
          value = 'flex-end';break;
      }

      this.dom.css('justify-content', value);
    }
  }, {
    key: 'verAlign',
    get: function get() {
      var align = this.dom.css('align-items');

      switch (align) {
        case 'flex-start':
          return 'top';
        case 'flex-end':
          return 'bottom';
      }

      return align ? align : 'top';
    },
    set: function set(value) {
      switch (value) {
        case 'top':
          value = 'flex-start';break;
        case 'bottom':
          value = 'flex-end';break;
      }

      this.dom.css('align-items', value);
    }
  }]);

  return HBox;
}(_Container3.default);

exports.default = HBox;

},{"./Container":"E:\\apps\\ux-engine\\src\\UX\\Container.js"}],"E:\\apps\\ux-engine\\src\\UX\\ImageView.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageView = function (_Node) {
  _inherits(ImageView, _Node);

  function ImageView(image) {
    _classCallCheck(this, ImageView);

    var _this = _possibleConstructorReturn(this, (ImageView.__proto__ || Object.getPrototypeOf(ImageView)).call(this));

    _this.proportional = true;
    _this.displayType = 'origin';

    if (image !== undefined) {
      _this.source = image;
    }
    return _this;
  }

  _createClass(ImageView, [{
    key: 'createDom',
    value: function createDom() {
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
  }, {
    key: 'source',
    get: function get() {
      var source = this.dom.css('background-image');

      if (source) {
        source = /^url\((['"]?)(.*)\1\)$/.exec(source);
        return source ? source[2] : null;
      }

      return null;
    },
    set: function set(value) {
      this.dom.css({ 'background-image': 'url(\'' + value + '\')' });

      if (this.displayType == 'origin') {
        this.dom.find('img').attr('src', value);
      }
    }
  }, {
    key: 'centered',
    get: function get() {
      return this.dom.css('background-position') === '50% 50%';
    },
    set: function set(value) {
      this.dom.css('background-position', value ? '50% 50%' : '0 0');
    }
  }, {
    key: 'displayType',
    get: function get() {
      switch (this.dom.css('background-size')) {
        case '100% 100%':
          return 'filled';
        case 'cover':
          return 'cropped';
        case 'resized':
          return 'resized';

        case 'auto':
        case 'auto auto':
          return 'origin';

        default:
          return '';
      }
    },
    set: function set(type) {
      this.dom.find('img').remove();

      switch (type.toString().toLowerCase()) {
        case 'filled':
          this.dom.css('background-size', '100% 100%');
          break;
        case 'cropped':
          this.dom.css('background-size', 'cover');
          break;
        case 'resized':
          this.dom.css('background-size', 'contain');
          break;
        case 'origin':
          var source = this.source;
          this.dom.css('background-size', 'auto auto');
          this.dom.append(jQuery('<img style="visibility: hidden" />'));
          this.source = source;
          break;
      }
    }
  }]);

  return ImageView;
}(_Node3.default);

exports.default = ImageView;

},{"./Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js"}],"E:\\apps\\ux-engine\\src\\UX\\Label.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Labeled2 = require('./Labeled');

var _Labeled3 = _interopRequireDefault(_Labeled2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = function (_Labeled) {
    _inherits(Label, _Labeled);

    function Label() {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
    }

    _createClass(Label, [{
        key: 'createDom',
        value: function createDom() {
            var dom = jQuery('<span class="ux-labeled ux-label"><span class="ux-labeled-text"></span></span>');
            return dom;
        }
    }]);

    return Label;
}(_Labeled3.default);

exports.default = Label;

},{"./Labeled":"E:\\apps\\ux-engine\\src\\UX\\Labeled.js"}],"E:\\apps\\ux-engine\\src\\UX\\Labeled.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _Font = require('./paint/Font');

var _Font2 = _interopRequireDefault(_Font);

var _ImageView = require('./ImageView');

var _ImageView2 = _interopRequireDefault(_ImageView);

var _Utils = require('./util/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Labeled = function (_Node) {
  _inherits(Labeled, _Node);

  function Labeled(text, graphic) {
    _classCallCheck(this, Labeled);

    var _this = _possibleConstructorReturn(this, (Labeled.__proto__ || Object.getPrototypeOf(Labeled)).call(this));

    _this.textType = 'text';
    _this.contentDisplay = 'left';
    _this.graphicTextGap = 4;
    _this.graphic = graphic;
    _this.text = text;
    return _this;
  }

  _createClass(Labeled, [{
    key: 'font',
    get: function get() {
      return _Font2.default.getFromDom(this.dom);
    },
    set: function set(value) {
      _Font2.default.applyToDom(value);
    }
  }, {
    key: 'text',
    get: function get() {
      switch (this.textType) {
        case 'text':
          return this.dom.find('> span.ux-labeled-text').text();
        case 'html':
          return this.dom.find('> span.ux-labeled-text').html();
      }

      return '';
    },
    set: function set(value) {
      switch (this.textType) {
        case 'text':
          this.dom.find('> span.ux-labeled-text').text(value);
          break;

        case 'html':
          this.dom.find('> span.ux-labeled-text').html(value);
          break;
      }
    }
  }, {
    key: 'textColor',
    get: function get() {
      return this.dom.css('color');
    },
    set: function set(value) {
      this.dom.css('color', value ? value : '');
    }
  }, {
    key: 'textType',
    get: function get() {
      return this._textType;
    },
    set: function set(value) {
      var text = this.text;
      var graphic = this.graphic;

      if (value) {
        this._textType = value.toString().toLowerCase();
      } else {
        this._textType = 'text';
      }

      this.text = text;
      this.graphic = graphic;
    }
  }, {
    key: 'contentDisplay',
    get: function get() {
      if (this.dom.first().hasClass('ux-graphic')) {
        if (this.dom.hasClass('ux-labeled-vertical')) {
          return 'top';
        } else {
          return 'left';
        }
      } else if (this.dom.last().hasClass('ux-graphic')) {
        if (this.dom.hasClass('ux-labeled-vertical')) {
          return 'bottom';
        } else {
          return 'right';
        }
      } else {
        return this._contentDisplay;
      }
    },
    set: function set(value) {
      var graphic = this.graphic;
      var graphicGap = this.graphicTextGap;
      this._contentDisplay = value;

      switch (value) {
        case 'top':
        case 'bottom':
          this.dom.addClass('ux-labeled-vertical');
          break;

        case 'right':
          this.dom.removeClass('ux-labeled-vertical');
          break;

        case 'left':
        default:
          this.dom.removeClass('ux-labeled-vertical');
          this._contentDisplay = 'left';
          break;
      }

      this.graphic = graphic;
      this.graphicTextGap = graphicGap;
    }
  }, {
    key: 'graphicTextGap',
    get: function get() {
      var grDom = this.dom.find('.ux-graphic');

      if (grDom.length) {
        var prop = 'margin-right';

        switch (this.contentDisplay) {
          case 'bottom':
            prop = 'margin-top';break;
          case 'right':
            prop = 'margin-left';break;
          case 'top':
            prop = 'margin-bottom';break;
        }

        return _Utils2.default.toPt(grDom.css(prop));
      } else {
        return this._graphicGap;
      }
    },
    set: function set(value) {
      this._graphicGap = value;

      var grDom = this.dom.find('.ux-graphic');

      if (grDom.length) {
        grDom.css('margin', 0);

        var prop = 'margin-right';

        switch (this.contentDisplay) {
          case 'bottom':
            prop = 'margin-top';break;
          case 'right':
            prop = 'margin-left';break;
          case 'top':
            prop = 'margin-bottom';break;
        }

        grDom.css(prop, value + 'px');
      }
    }
  }, {
    key: 'graphic',
    get: function get() {
      return _Node3.default.getFromDom(this.dom.find('.ux-graphic > *').first());
    },
    set: function set(node) {
      var graphicGap = this.graphicTextGap;
      this.dom.find('.ux-graphic').remove();

      if (node) {
        if (typeof node === 'string' || node instanceof String) {
          node = new _ImageView2.default(node);
        }

        var dom = jQuery('<span class="ux-graphic" />').append(node.dom);

        switch (this.contentDisplay) {
          case 'top':
          case 'left':
            this.dom.prepend(dom);
            break;
          case 'bottom':
          case 'right':
            this.dom.append(dom);
            break;
        }

        this.graphicTextGap = graphicGap;
      }
    }
  }]);

  return Labeled;
}(_Node3.default);

exports.default = Labeled;

},{"./ImageView":"E:\\apps\\ux-engine\\src\\UX\\ImageView.js","./Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js","./paint/Font":"E:\\apps\\ux-engine\\src\\UX\\paint\\Font.js","./util/Utils":"E:\\apps\\ux-engine\\src\\UX\\util\\Utils.js"}],"E:\\apps\\ux-engine\\src\\UX\\Node.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = require("./util/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base HTML Node class.
 **/
var Node = function () {
    function Node(dom) {
        _classCallCheck(this, Node);

        if (dom === undefined) {
            this.dom = this.createDom();

            if (!(this.dom instanceof jQuery)) {
                throw new Error("Method createDom() must return instance of an jQuery object");
            }
        } else {
            if (dom instanceof jQuery) {
                this.dom = dom;
            } else {
                throw new Error("Non-jquery object cannot be passed into Node.construct()");
            }
        }

        this.dom.data('--wrapper', this);
    }

    _createClass(Node, [{
        key: "createDom",
        value: function createDom() {
            throw new Error("Cannot call abstract method createDom()");
        }
    }, {
        key: "requestFocus",
        value: function requestFocus() {
            this.focus();
        }
    }, {
        key: "relocate",
        value: function relocate(x, y) {
            this.position = [x, y];
        }
    }, {
        key: "resize",
        value: function resize(width, height) {
            this.size = [width, height];
        }
    }, {
        key: "focus",
        value: function focus() {
            this.dom.focus();
        }
    }, {
        key: "css",
        value: function css(value) {
            var _dom;

            return (_dom = this.dom).css.apply(_dom, arguments);
        }
    }, {
        key: "data",
        value: function data(params) {
            if (arguments.length === 1) {
                var _dom2;

                return (_dom2 = this.dom).data.apply(_dom2, arguments);
            } else {
                var _dom3;

                (_dom3 = this.dom).data.apply(_dom3, arguments);
                return this;
            }
        }
    }, {
        key: "lookup",
        value: function lookup(selector) {
            var dom = this.dom.find(selector).first();

            if (dom) {
                return Node.getFromDom(dom);
            }

            return null;
        }
    }, {
        key: "lookupAll",
        value: function lookupAll(selector) {
            var _this = this;

            var nodes = [];

            this.dom.find(selector).each(function () {
                nodes.push(Node.getFromDom(_this));
            });

            return nodes;
        }
    }, {
        key: "toFront",
        value: function toFront() {
            var parent = this.parent;

            if (parent) {
                if (parent['childToFront']) {
                    parent.childToFront(this);
                }
            }
        }
    }, {
        key: "toBack",
        value: function toBack() {
            var parent = this.parent;

            if (parent) {
                if (parent['childToBack']) {
                    parent.childToBack(this);
                }
            }
        }
    }, {
        key: "free",
        value: function free() {
            var wrapperDom = this.dom.data('--wrapper-dom');

            if (wrapperDom) {
                wrapperDom.dom.remove();
            } else {
                this.dom.detach();
            }

            return this;
        }
    }, {
        key: "show",
        value: function show() {
            this.dom.show();
            return this;
        }
    }, {
        key: "hide",
        value: function hide() {
            this.dom.hide();
            return this;
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.dom.toggle();
            return this;
        }
    }, {
        key: "on",
        value: function on(event, callback) {
            var _this2 = this;

            this.dom.on(event, function (event) {
                event.sender = _this2;
                callback.call(_this2, event);
            });

            return this;
        }
    }, {
        key: "bind",
        value: function bind(handlers) {}
    }, {
        key: "off",
        value: function off(event) {
            this.dom.off(event);
            return this;
        }
    }, {
        key: "trigger",
        value: function trigger(event, params) {
            return this.dom.trigger(event, params);
        }
    }, {
        key: "child",
        value: function child(id) {
            return null;
        }
    }, {
        key: "load",
        value: function load(object, controller) {
            for (var prop in object) {
                if (object.hasOwnProperty(prop)) {
                    if (prop[0] == '_') {
                        continue;
                    }

                    var value = object[prop];

                    switch (prop) {
                        case 'on':
                            if (controller) {
                                for (var event in value) {

                                    if (value.hasOwnProperty(event)) {
                                        var handler = value[event];
                                        if (typeof controller[handler] === 'function') {
                                            this.on(event, controller[handler].bind(controller));
                                        }
                                    }
                                }
                            }
                            break;

                        default:
                            this[prop] = value;
                            break;
                    }
                }
            }
        }
    }, {
        key: "id",
        get: function get() {
            return this.dom.attr('id');
        },
        set: function set(value) {
            this.dom.attr('id', value);
        }
    }, {
        key: "visible",
        get: function get() {
            return this.dom.is(':visible');
        },
        set: function set(value) {
            if (value) {
                this.dom.show();
            } else {
                this.dom.hide();
            }
        }
    }, {
        key: "enabled",
        get: function get() {
            return !this.dom.prop("disabled");
        },
        set: function set(value) {
            this.dom.prop('disabled', !value);
        }
    }, {
        key: "focused",
        get: function get() {
            return this.dom.is(':focus');
        }
    }, {
        key: "style",
        get: function get() {
            return this.dom.attr('style');
        },
        set: function set(value) {
            this.dom.attr('style', value);
        }
    }, {
        key: "x",
        get: function get() {
            return this.dom.position().left;
        },
        set: function set(value) {
            this.dom.css({ left: value });
        }
    }, {
        key: "y",
        get: function get() {
            return this.dom.position().top;
        },
        set: function set(value) {
            this.dom.css({ top: value });
        }
    }, {
        key: "position",
        get: function get() {
            return [this.x, this.y];
        },
        set: function set(value) {
            if (value instanceof Array && value.length >= 2) {
                this.x = value[0];
                this.y = value[1];
            }
        }
    }, {
        key: "width",
        get: function get() {
            return this.dom.width();
        },
        set: function set(value) {
            this.dom.width(value);
        }
    }, {
        key: "height",
        get: function get() {
            return this.dom.height();
        },
        set: function set(value) {
            this.dom.height(value);
        }
    }, {
        key: "size",
        get: function get() {
            return [this.width, this.height];
        },
        set: function set(value) {
            if (value instanceof Array && value.length >= 2) {
                this.width = value[0];
                this.height = value[1];
            }
        }
    }, {
        key: "padding",
        get: function get() {
            return [_Utils2.default.toPt(this.dom.css('padding-top')), _Utils2.default.toPt(this.dom.css('padding-right')), _Utils2.default.toPt(this.dom.css('padding-bottom')), _Utils2.default.toPt(this.dom.css('padding-left'))];
        },
        set: function set(value) {
            if (value instanceof Array) {
                if (value.length >= 4) {
                    this.dom.css({
                        'padding-top': value[0], 'padding-right': value[1],
                        'padding-bottom': value[2], 'padding-left': value[3]
                    });
                } else if (value.length >= 2) {
                    this.dom.css({
                        'padding-top': value[0], 'padding-right': value[1],
                        'padding-bottom': value[0], 'padding-left': value[1]
                    });
                } else if (value.length >= 1) {
                    this.dom.css('padding', value[0]);
                } else {
                    this.dom.css('padding', 0);
                }
            } else {
                this.dom.css('padding', value);
            }
        }
    }, {
        key: "parent",
        get: function get() {
            var parent = null;

            if (this.dom.data('--wrapper-dom')) {
                parent = this.dom.data('--wrapper-dom').parent();
            } else {
                parent = this.dom.parent();
            }

            if (!parent) {
                return null;
            }

            return Node.getFromDom(parent);
        }
    }, {
        key: "userData",
        get: function get() {
            return this.dom.data('--user-data');
        },
        set: function set(value) {
            this.dom.data('--user-data', value);
        }
    }, {
        key: "controller",
        get: function get() {
            return this._controller;
        },
        set: function set(object) {
            this._controller = object;
        }
    }], [{
        key: "getFromDom",
        value: function getFromDom(jqueryObject) {
            if (jqueryObject === null || jqueryObject.length === 0) {
                return null;
            }

            if (jqueryObject instanceof jQuery) {
                var wrapper = jqueryObject.data('--wrapper');
                return wrapper ? wrapper : new Node(jqueryObject);
            }

            throw new Error("Node.getFromDom(): 1 argument must be an jQuery object");
        }
    }]);

    return Node;
}();

exports.default = Node;

},{"./util/Utils":"E:\\apps\\ux-engine\\src\\UX\\util\\Utils.js"}],"E:\\apps\\ux-engine\\src\\UX\\Page.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UILoader = require('./../NX/UILoader');

var _UILoader2 = _interopRequireDefault(_UILoader);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Page = function () {
  function Page(uiResource) {
    _classCallCheck(this, Page);

    this.uiLoader = new _UILoader2.default();
    this.ui = {};
    this._content = null;

    this.load(uiResource);
  }

  _createClass(Page, [{
    key: 'bindOne',
    value: function bindOne(id, handler) {
      var _this = this;

      if (this._binds) {
        this._binds[id] = handler;
      } else {
        this._binds = {};
        this._binds[id] = handler;
      }

      if (this._content) {
        var sub = this._content.child(id);

        if (sub) {
          for (var event in handler) {
            if (handler.hasOwnProperty(event)) {
              sub.on(event, function (e) {
                handler[event].call(_this, e);
              });
            }
          }
        } else {
          console.warn('Child \'' + id + '\' is not defined');
        }
      }
    }
  }, {
    key: 'bind',
    value: function bind(handlers) {
      this._binds = handlers;

      if (this._content) {
        for (var id in handlers) {
          if (handlers.hasOwnProperty(id)) {
            this.bindOne(id, handlers[id]);
          }
        }
      }
    }
  }, {
    key: 'load',
    value: function load(uiResource) {
      var _this2 = this;

      if (uiResource instanceof String || typeof uiResource === 'string') {
        this.uiLoader.loadFromUrl(uiResource, function (node) {
          _this2._content = node;
          _this2.afterLoad();
        }, this);
      } else {
        this._content = this.uiLoader.load(uiResource, this);
        this.afterLoad();
      }
    }
  }, {
    key: 'afterLoad',
    value: function afterLoad() {
      if (this._binds) {
        this.bind(this._binds);
      }

      this._refreshUi();

      if (this._app) {
        this._app.content = this._content;
      }
    }
  }, {
    key: '_refreshUi',
    value: function _refreshUi() {
      this.ui = {};

      var self = this;

      var refresh = function refresh(node) {
        if (node instanceof _Container2.default) {
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
      };

      refresh(this._content);

      if (this._app) {
        window.ui = this.ui;
      }
    }
  }, {
    key: 'showInApp',
    value: function showInApp(app) {
      this._app = app;

      if (this._content) {
        app.content = this._content;
        window.ui = this.ui;
      }
    }
  }, {
    key: 'content',
    get: function get() {
      return this._content;
    }
  }]);

  return Page;
}();

exports.default = Page;

},{"./../NX/UILoader":"E:\\apps\\ux-engine\\src\\NX\\UILoader.js","./Container":"E:\\apps\\ux-engine\\src\\UX\\Container.js"}],"E:\\apps\\ux-engine\\src\\UX\\TextArea.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextInputControl2 = require('./TextInputControl');

var _TextInputControl3 = _interopRequireDefault(_TextInputControl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_TextInputControl) {
  _inherits(TextArea, _TextInputControl);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: 'createDom',
    value: function createDom() {
      var dom = jQuery('<textarea class="form-control ux-text-input-control ux-text-area" />');
      return dom;
    }
  }]);

  return TextArea;
}(_TextInputControl3.default);

exports.default = TextArea;

},{"./TextInputControl":"E:\\apps\\ux-engine\\src\\UX\\TextInputControl.js"}],"E:\\apps\\ux-engine\\src\\UX\\TextField.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextInputControl2 = require('./TextInputControl');

var _TextInputControl3 = _interopRequireDefault(_TextInputControl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_TextInputControl) {
  _inherits(TextField, _TextInputControl);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: 'createDom',
    value: function createDom() {
      var dom = jQuery('<input type="text" class="form-control ux-text-input-control ux-text-field" />');
      return dom;
    }
  }]);

  return TextField;
}(_TextInputControl3.default);

exports.default = TextField;

},{"./TextInputControl":"E:\\apps\\ux-engine\\src\\UX\\TextInputControl.js"}],"E:\\apps\\ux-engine\\src\\UX\\TextInputControl.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInputControl = function (_Node) {
  _inherits(TextInputControl, _Node);

  function TextInputControl() {
    _classCallCheck(this, TextInputControl);

    return _possibleConstructorReturn(this, (TextInputControl.__proto__ || Object.getPrototypeOf(TextInputControl)).apply(this, arguments));
  }

  _createClass(TextInputControl, [{
    key: 'editable',
    get: function get() {
      return !this.dom.prop('readonly');
    },
    set: function set(value) {
      this.dom.prop('readonly', !value);
    }
  }, {
    key: 'textAlign',
    get: function get() {
      return thid.dom.css('text-algin');
    },
    set: function set(value) {
      this.dom.css('text-algin', value);
    }
  }, {
    key: 'font',
    get: function get() {
      return Font.getFromDom(this.dom);
    },
    set: function set(value) {
      Font.applyToDom(value);
    }
  }, {
    key: 'text',
    get: function get() {
      return this.dom.val();
    },
    set: function set(value) {
      this.dom.val(value);
    }
  }]);

  return TextInputControl;
}(_Node3.default);

exports.default = TextInputControl;

},{"./Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js"}],"E:\\apps\\ux-engine\\src\\UX\\ToggleButton.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Button2 = require('./Button');

var _Button3 = _interopRequireDefault(_Button2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleButton = function (_Button) {
  _inherits(ToggleButton, _Button);

  function ToggleButton() {
    _classCallCheck(this, ToggleButton);

    return _possibleConstructorReturn(this, (ToggleButton.__proto__ || Object.getPrototypeOf(ToggleButton)).apply(this, arguments));
  }

  _createClass(ToggleButton, [{
    key: 'createDom',
    value: function createDom() {
      var dom = _get(ToggleButton.prototype.__proto__ || Object.getPrototypeOf(ToggleButton.prototype), 'createDom', this).call(this);
      dom.addClass('ux-toggle-button');
      dom.attr('data-toggle', 'button');
      return dom;
    }
  }, {
    key: '__bindEvents',
    value: function __bindEvents(dom) {
      var _this2 = this;

      dom.on('click', function () {
        _this2.selected = !_this2.selected;
      });
    }
  }, {
    key: 'selected',
    get: function get() {
      return this.dom.hasClass('active');
    },
    set: function set(value) {
      if (value) {
        this.dom.addClass('active');
        this.dom.attr('aria-pressed', true);
      } else {
        this.dom.removeClass('active');
        this.dom.attr('aria-pressed', false);
      }
    }
  }]);

  return ToggleButton;
}(_Button3.default);

exports.default = ToggleButton;

},{"./Button":"E:\\apps\\ux-engine\\src\\UX\\Button.js"}],"E:\\apps\\ux-engine\\src\\UX\\UX.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ToggleButton = require('./ToggleButton');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

var _Labeled = require('./Labeled');

var _Labeled2 = _interopRequireDefault(_Labeled);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _HBox = require('./HBox');

var _HBox2 = _interopRequireDefault(_HBox);

var _VBox = require('./VBox');

var _VBox2 = _interopRequireDefault(_VBox);

var _AnchorPane = require('./AnchorPane');

var _AnchorPane2 = _interopRequireDefault(_AnchorPane);

var _ImageView = require('./ImageView');

var _ImageView2 = _interopRequireDefault(_ImageView);

var _TextInputControl = require('./TextInputControl');

var _TextInputControl2 = _interopRequireDefault(_TextInputControl);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _TextArea = require('./TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Font = require('./paint/Font');

var _Font2 = _interopRequireDefault(_Font);

var _Utils = require('./util/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Page: _Page2.default,
  Node: _Node2.default,
  ImageView: _ImageView2.default,
  Button: _Button2.default, ToggleButton: _ToggleButton2.default,
  Labeled: _Labeled2.default,
  Label: _Label2.default, Checkbox: _Checkbox2.default,
  TextInputControl: _TextInputControl2.default, TextField: _TextField2.default, TextArea: _TextArea2.default,
  Container: _Container2.default, HBox: _HBox2.default, VBox: _VBox2.default, AnchorPane: _AnchorPane2.default,

  Font: _Font2.default
};

},{"./AnchorPane":"E:\\apps\\ux-engine\\src\\UX\\AnchorPane.js","./Button":"E:\\apps\\ux-engine\\src\\UX\\Button.js","./Checkbox":"E:\\apps\\ux-engine\\src\\UX\\Checkbox.js","./Container":"E:\\apps\\ux-engine\\src\\UX\\Container.js","./HBox":"E:\\apps\\ux-engine\\src\\UX\\HBox.js","./ImageView":"E:\\apps\\ux-engine\\src\\UX\\ImageView.js","./Label":"E:\\apps\\ux-engine\\src\\UX\\Label.js","./Labeled":"E:\\apps\\ux-engine\\src\\UX\\Labeled.js","./Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js","./Page":"E:\\apps\\ux-engine\\src\\UX\\Page.js","./TextArea":"E:\\apps\\ux-engine\\src\\UX\\TextArea.js","./TextField":"E:\\apps\\ux-engine\\src\\UX\\TextField.js","./TextInputControl":"E:\\apps\\ux-engine\\src\\UX\\TextInputControl.js","./ToggleButton":"E:\\apps\\ux-engine\\src\\UX\\ToggleButton.js","./VBox":"E:\\apps\\ux-engine\\src\\UX\\VBox.js","./paint/Font":"E:\\apps\\ux-engine\\src\\UX\\paint\\Font.js","./util/Utils":"E:\\apps\\ux-engine\\src\\UX\\util\\Utils.js"}],"E:\\apps\\ux-engine\\src\\UX\\VBox.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = require('./Container');

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VBox = function (_Container) {
  _inherits(VBox, _Container);

  function VBox(nodes) {
    _classCallCheck(this, VBox);

    var _this = _possibleConstructorReturn(this, (VBox.__proto__ || Object.getPrototypeOf(VBox)).apply(this, arguments));

    _this.spacing = 0;
    return _this;
  }

  _createClass(VBox, [{
    key: 'createDom',
    value: function createDom() {
      var dom = _get(VBox.prototype.__proto__ || Object.getPrototypeOf(VBox.prototype), 'createDom', this).call(this);
      dom.addClass('ux-v-box');

      return dom;
    }
  }, {
    key: 'createSlotDom',
    value: function createSlotDom(object) {
      var dom = _get(VBox.prototype.__proto__ || Object.getPrototypeOf(VBox.prototype), 'createSlotDom', this).call(this, object);
      return dom;
    }
  }, {
    key: 'spacing',
    get: function get() {
      return this._spacing;
    },
    set: function set(value) {
      this._spacing = value;
      var slots = this.dom.find('> div');

      slots.css('margin-bottom', value + 'px');
      slots.last().css('margin-bottom', 0);
    }
  }, {
    key: 'horAlign',
    get: function get() {
      var align = this.dom.css('align-items');

      switch (align) {
        case 'flex-start':
          return 'left';
        case 'flex-end':
          return 'right';
      }

      return align;
    },
    set: function set(value) {
      switch (value) {
        case 'left':
          value = 'flex-start';break;
        case 'right':
          value = 'flex-end';break;
      }

      this.dom.css('align-items', value);
    }
  }, {
    key: 'verAlign',
    get: function get() {
      var align = this.dom.css('justify-content');

      switch (align) {
        case 'flex-start':
          return 'top';
        case 'flex-end':
          return 'bottom';
      }

      return align ? align : 'top';
    },
    set: function set(value) {
      switch (value) {
        case 'top':
          value = 'flex-start';break;
        case 'bottom':
          value = 'flex-end';break;
      }

      this.dom.css('justify-content', value);
    }
  }]);

  return VBox;
}(_Container3.default);

exports.default = VBox;

},{"./Container":"E:\\apps\\ux-engine\\src\\UX\\Container.js"}],"E:\\apps\\ux-engine\\src\\UX\\paint\\Font.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = require('./../util/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Font = function () {
  function Font(name, size) {
    _classCallCheck(this, Font);

    this._dom = null;
    this.name = name || 'serif';
    this.size = size || 12;
  }

  _createClass(Font, [{
    key: 'name',
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;

      if (this._dom) {
        this._dom.css('font-family', value);
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this._size;
    },
    set: function set(value) {
      this._size = value | 0;

      if (this._dom) {
        this._dom.css('font-size', value + 'px');
      }
    }
  }, {
    key: 'bold',
    get: function get() {
      return this._bold | false;
    },
    set: function set(value) {
      this._bold = value | false;

      if (this._dom) {
        this._dom.css('font-weight', this._bold ? 'bold' : 'normal');
      }
    }
  }, {
    key: 'italic',
    get: function get() {
      return this._italic | false;
    },
    set: function set(value) {
      this._italic = value | false;

      if (this._dom) {
        this._dom.css('font-style', this._italic ? 'italic' : 'normal');
      }
    }
  }, {
    key: 'underline',
    get: function get() {
      return this._underline | false;
    },
    set: function set(value) {
      this._underline = value | false;

      if (this._dom) {
        this._dom.css('text-decoration', this._underline ? 'underline' : 'none');
      }
    }
  }], [{
    key: 'applyToDom',
    value: function applyToDom(dom, font) {
      if (font instanceof Font) {
        dom.css('font-family', font.name);
        dom.css('font-size', font.size);

        if (font.bold) {
          dom.css('font-weight', 'bold');
        }

        if (font.italic) {
          dom.css('font-style', 'italic');
        }

        if (font.underline) {
          dom.css('text-decoration', 'underline');
        }
      }
    }
  }, {
    key: 'getFromDom',
    value: function getFromDom(dom) {
      if (dom instanceof jQuery) {
        var family = dom.css('font-family');
        var size = _Utils2.default.toPt(dom.css('font-size'));

        var bold = dom.css('font-weight') === 'bold';
        var italic = dom.css('font-style') === 'italic';

        var font = new Font(family, size);

        if (bold) font.bold = true;
        if (italic) font.italic = true;

        font._dom = dom;
        return font;
      }

      throw new TypeError('getFromDom(): 1 argument must be jquery object');
    }
  }]);

  return Font;
}();

exports.default = Font;

},{"./../util/Utils":"E:\\apps\\ux-engine\\src\\UX\\util\\Utils.js"}],"E:\\apps\\ux-engine\\src\\UX\\util\\Utils.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "isElement",
    value: function isElement(obj) {
      try {
        //Using W3 DOM2 (works for FF, Opera and Chrom)
        return obj instanceof HTMLElement;
      } catch (e) {
        //Browsers not supporting W3 DOM2 don't have HTMLElement and
        //an exception is thrown and we end up here. Testing some
        //properties that all elements have. (works on IE7)
        return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj.nodeType === 1 && _typeof(obj.style) === "object" && _typeof(obj.ownerDocument) === "object";
      }
    }
  }, {
    key: "toPt",
    value: function toPt(cssValue) {
      return parseInt(cssValue);
    }
  }]);

  return Utils;
}();

exports.default = Utils;

},{}],"E:\\apps\\ux-engine\\src\\lib.js":[function(require,module,exports){
'use strict';

var _NX = require('./NX/NX');

var _NX2 = _interopRequireDefault(_NX);

var _UX = require('./UX/UX');

var _UX2 = _interopRequireDefault(_UX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.NX = _NX2.default;
window.UX = _UX2.default;

},{"./NX/NX":"E:\\apps\\ux-engine\\src\\NX\\NX.js","./UX/UX":"E:\\apps\\ux-engine\\src\\UX\\UX.js"}]},{},["E:\\apps\\ux-engine\\src\\lib.js"])

//# sourceMappingURL=dnext-engine-0.1.0.js.map
