(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"E:\\apps\\ux-engine\\src\\UX\\App.js":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(domElement) {
    _classCallCheck(this, App);

    this.root = jQuery(domElement);
  }

  _createClass(App, [{
    key: 'show',
    value: function show(page) {
      this.root.html('');
      this.root.append(page.dom);
    }
  }]);

  return App;
}();

},{}],"E:\\apps\\ux-engine\\src\\UX\\Button.js":[function(require,module,exports){
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
            var dom = jQuery('<button></button>');
            dom.addClass('btn');
            dom.addClass('btn-default');

            return dom;
        }
    }]);

    return Button;
}(_Labeled3.default);

exports.default = Button;

},{"./Labeled":"E:\\apps\\ux-engine\\src\\UX\\Labeled.js"}],"E:\\apps\\ux-engine\\src\\UX\\Label.js":[function(require,module,exports){
'use strict';

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
            var dom = jQuery('<span></span>');
            dom.addClass('label');
            return dom;
        }
    }]);

    return Label;
}(_Labeled3.default);

},{"./Labeled":"E:\\apps\\ux-engine\\src\\UX\\Labeled.js"}],"E:\\apps\\ux-engine\\src\\UX\\Labeled.js":[function(require,module,exports){
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

var Labeled = function (_Node) {
    _inherits(Labeled, _Node);

    function Labeled(text) {
        _classCallCheck(this, Labeled);

        var _this = _possibleConstructorReturn(this, (Labeled.__proto__ || Object.getPrototypeOf(Labeled)).call(this));

        _this.text = text;
        return _this;
    }

    _createClass(Labeled, [{
        key: 'text',
        get: function get() {
            return this.dom.text();
        },
        set: function set(value) {
            this.dom.text(value);
        }
    }]);

    return Labeled;
}(_Node3.default);

exports.default = Labeled;

},{"./Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js"}],"E:\\apps\\ux-engine\\src\\UX\\Node.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        key: "lookup",
        value: function lookup(selector) {
            var dom = this.dom.find(selector).first();

            if (dom.length()) {
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
        key: "free",
        value: function free() {
            this.dom.detach();
        }
    }, {
        key: "on",
        value: function on(event, callback) {
            this.dom.on(event, callback);
        }
    }, {
        key: "off",
        value: function off(event) {
            this.dom.off(event);
        }
    }, {
        key: "trigger",
        value: function trigger(event, params) {
            this.dom.trigger(event, params);
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
        key: "parent",
        get: function get() {
            return Node.getFromDom(this.dom.parent());
        }
    }], [{
        key: "getFromDom",
        value: function getFromDom(jqueryObject) {
            if (jqueryObject === null) {
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

},{}],"E:\\apps\\ux-engine\\src\\UX\\Page.js":[function(require,module,exports){
'use strict';

var _Pane2 = require('./Pane');

var _Pane3 = _interopRequireDefault(_Pane2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Pane) {
  _inherits(Page, _Pane);

  function Page(nodes) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, nodes));
  }

  return Page;
}(_Pane3.default);

},{"./Pane":"E:\\apps\\ux-engine\\src\\UX\\Pane.js"}],"E:\\apps\\ux-engine\\src\\UX\\Pane.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require("./Node");

var _Node3 = _interopRequireDefault(_Node2);

var _ObservableList = require("./common/ObservableList");

var _ObservableList2 = _interopRequireDefault(_ObservableList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pane = function (_Node) {
    _inherits(Pane, _Node);

    function Pane(nodes) {
        _classCallCheck(this, Pane);

        var _this = _possibleConstructorReturn(this, (Pane.__proto__ || Object.getPrototypeOf(Pane)).call(this));

        _this.__children = new _ObservableList2.default();
        _this.__children.addListener(function (object, action) {
            switch (action) {
                case 'clear':
                    _this.dom.html('');
                    break;

                case 'add':
                    console.log(object);
                    _this.dom.append(_this.createSlotDom(object));
                    break;

                case 'remove':
                    var slot = object.dom.data('--slot-dom');

                    if (slot instanceof jQuery) {
                        object.data('--slot-dom', null);
                        slot.remove();
                    } else {
                        object.free();
                    }

                    break;
            }
        });

        _this.add(arguments);
        return _this;
    }

    _createClass(Pane, [{
        key: "createSlotDom",
        value: function createSlotDom(object) {
            var dom = jQuery('<div/>').append(object.dom);
            dom.data('--wrapper', object);
            object.dom.data('--slot-dom', dom);
            return dom;
        }
    }, {
        key: "createDom",
        value: function createDom() {
            var dom = jQuery('<div></div>');
            return dom;
        }
    }, {
        key: "add",
        value: function add(nodes) {
            var _children;

            (_children = this.children).add.apply(_children, arguments);
        }
    }, {
        key: "remove",
        value: function remove(nodes) {
            var _children2;

            (_children2 = this.children).remove.apply(_children2, arguments);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.children.clear();
        }
    }, {
        key: "children",
        get: function get() {
            return this.__children;
        }
    }]);

    return Pane;
}(_Node3.default);

exports.default = Pane;

},{"./Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js","./common/ObservableList":"E:\\apps\\ux-engine\\src\\UX\\common\\ObservableList.js"}],"E:\\apps\\ux-engine\\src\\UX\\common\\ObservableList.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObservableList = function () {
    function ObservableList() {
        _classCallCheck(this, ObservableList);

        this._list = [];
        this._callbacks = [];
    }

    _createClass(ObservableList, [{
        key: '_callListeners',
        value: function _callListeners(arg, group) {
            for (var i = 0; i < this._callbacks.length; i++) {
                this._callbacks[i].call(this, arg, group);
            }
        }
    }, {
        key: 'count',
        value: function count() {
            return this._list.length;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._list = [];
            this._callListeners(null, 'clear');
        }
    }, {
        key: 'add',
        value: function add(objects) {
            for (var i = 0; i < arguments.length; i++) {
                this._list.push(arguments[i]);
                this._callListeners(arguments[i], 'add');
            }
        }
    }, {
        key: 'remove',
        value: function remove(objects) {
            for (var i = 0; i < arguments.length; i++) {
                var object = this._list[index];
                var index = this._list.indexOf(object);

                if (index > -1) {
                    delete this._list[index];

                    this._callListeners(object, 'remove');
                }
            }
        }
    }, {
        key: 'removeByIndex',
        value: function removeByIndex(index) {
            if (index >= 0 && index <= this._list.length - 1) {
                delete this._list[index];
            }
        }
    }, {
        key: 'addListener',
        value: function addListener(callback) {
            this._callbacks.push(callback);
        }
    }, {
        key: 'count',
        get: function get() {
            return this._list.length;
        }
    }]);

    return ObservableList;
}();

exports.default = ObservableList;

},{}],"E:\\apps\\ux-engine\\src\\lib.js":[function(require,module,exports){
'use strict';

var _App = require('./UX/App');

var _App2 = _interopRequireDefault(_App);

var _Node = require('./UX/Node');

var _Node2 = _interopRequireDefault(_Node);

var _Button = require('./UX/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Labeled = require('./UX/Labeled');

var _Labeled2 = _interopRequireDefault(_Labeled);

var _Label = require('./UX/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Pane = require('./UX/Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Page = require('./UX/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.UX = {
  App: _App2.default, Node: _Node2.default, Button: _Button2.default, Labeled: _Labeled2.default, Label: _Label2.default, Pane: _Pane2.default, Page: _Page2.default
};

},{"./UX/App":"E:\\apps\\ux-engine\\src\\UX\\App.js","./UX/Button":"E:\\apps\\ux-engine\\src\\UX\\Button.js","./UX/Label":"E:\\apps\\ux-engine\\src\\UX\\Label.js","./UX/Labeled":"E:\\apps\\ux-engine\\src\\UX\\Labeled.js","./UX/Node":"E:\\apps\\ux-engine\\src\\UX\\Node.js","./UX/Page":"E:\\apps\\ux-engine\\src\\UX\\Page.js","./UX/Pane":"E:\\apps\\ux-engine\\src\\UX\\Pane.js"}]},{},["E:\\apps\\ux-engine\\src\\lib.js"])

//# sourceMappingURL=ux-engine-0.1.0.js.map
