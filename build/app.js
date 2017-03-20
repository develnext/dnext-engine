(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"E:\\apps\\ux-engine\\build\\app\\app.js":[function(require,module,exports){
'use strict';

var _MainPage = require('./pages/MainPage');

window.MainPage = _MainPage.MainPage;

},{"./pages/MainPage":"E:\\apps\\ux-engine\\build\\app\\pages\\MainPage.js"}],"E:\\apps\\ux-engine\\build\\app\\pages\\MainPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MainPage = require('./MainPage.view');

var _MainPage2 = _interopRequireDefault(_MainPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainPage = exports.MainPage = function (_UX$Page) {
  _inherits(MainPage, _UX$Page);

  function MainPage() {
    _classCallCheck(this, MainPage);

    return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this, _MainPage2.default));
  }

  _createClass(MainPage, [{
    key: 'doButton1Click',
    value: function doButton1Click() {
      ui.imageView.source = 'https://cdn3.iconfinder.com/data/icons/aquanox/globe.png';
    }
  }, {
    key: 'doImageViewClick',
    value: function doImageViewClick() {
      alert('Hello!');
    }
  }, {
    key: 'doCheckboxClick',
    value: function doCheckboxClick(e) {
      ui.button1.enabled = e.sender.checked;
    }
  }]);

  return MainPage;
}(UX.Page);

},{"./MainPage.view":"E:\\apps\\ux-engine\\build\\app\\pages\\MainPage.view.js"}],"E:\\apps\\ux-engine\\build\\app\\pages\\MainPage.view.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  _: 'HBox',

  align: ['center', 'center'],
  padding: 20,
  spacing: 10,

  _content: [{ _: 'Button',
    id: 'button1',
    text: '<b>Hello</b> World',
    textType: 'html',
    contentDisplay: 'left',
    graphicTextGap: 10,

    graphic: 'https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/16x16/Sunny.png',
    on: {
      click: 'doButton1Click'
    }
  }, { _: 'ImageView',
    id: 'imageView',
    size: [300, 300],
    centered: true,
    source: 'https://cdn1.iconfinder.com/data/icons/ampola-final-by-ampeross/256/html_icon.png'
  }, { _: 'Checkbox',
    id: 'checkbox',
    text: 'Check It!',
    checked: true,
    on: {
      click: 'doCheckboxClick'
    }
  }, { _: 'VBox',
    align: ['left', 'center'],
    padding: [0, 0, 0, 30],
    spacing: 10,
    width: 400,
    height: 300,
    _content: [{ _: 'Label', text: 'Hello Mike!' }, { _: 'Label', text: '<b>Peace!</b>', textType: 'html' }, { _: 'TextField', width: '100%' }, { _: 'Button', text: 'Click' }]
  }]
};

},{}]},{},["E:\\apps\\ux-engine\\build\\app\\app.js"])

//# sourceMappingURL=app.js.map
