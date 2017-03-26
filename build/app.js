(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\app.js":[function(require,module,exports){
'use strict';

var _MainPage = require('./pages/MainPage');

var _OtherPage = require('./pages/OtherPage');

window.MainPage = _MainPage.MainPage;
window.OtherPage = _OtherPage.OtherPage;

},{"./pages/MainPage":"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\pages\\MainPage.js","./pages/OtherPage":"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\pages\\OtherPage.js"}],"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\pages\\MainPage.js":[function(require,module,exports){
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

var MainPage = exports.MainPage = function (_NX$Fragment) {
  _inherits(MainPage, _NX$Fragment);

  function MainPage() {
    _classCallCheck(this, MainPage);

    return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this, _MainPage2.default));
  }

  _createClass(MainPage, [{
    key: 'doMenuAction',
    value: function doMenuAction(e) {}
  }, {
    key: 'doClick',
    value: function doClick() {
      this.menu.selectedIndex += 1;
      this.menu.removeByIndex(0);
    }
  }, {
    key: 'doImageViewClick',
    value: function doImageViewClick() {
      alert('Hello!');
    }
  }, {
    key: 'doCheckboxClick',
    value: function doCheckboxClick(e) {
      this.button1.enabled = e.sender.checked;
    }
  }]);

  return MainPage;
}(NX.Fragment);

},{"./MainPage.view":"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\pages\\MainPage.view.js"}],"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\pages\\MainPage.view.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  _: 'VBox',
  align: ['center', 'center'],
  padding: 20,
  spacing: 10,
  width: 500,
  fitWidth: true,
  _content: [{ _: 'ListView', id: 'menu',
    spacing: 20,
    on: { action: 'doMenuAction' },
    horAlign: 'right',
    _content: [{ _: 'Label', text: 'First <b>Step</b>', textType: 'html', id: 'firstStep', on: { click: 'doFirstStep' } }, { _: 'Label', text: 'Second Step', id: 'secondStep', on: { click: 'doSecondStep' } }, { _: 'Label', text: 'Last Step', id: 'lastStep', on: { click: 'doLastStep' } }]
  }, { _: 'Button', text: 'click', kind: 'success', font: { bold: true }, on: { click: 'doClick' } }, { _: 'Listbox', items: ['One', 'Two', 'Three'] }, { _: 'FragmentPane',
    id: 'fragment',
    content: 'OtherPage'
  }]
};

},{}],"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\pages\\OtherPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OtherPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OtherPage = require('./OtherPage.view');

var _OtherPage2 = _interopRequireDefault(_OtherPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OtherPage = exports.OtherPage = function (_NX$Fragment) {
  _inherits(OtherPage, _NX$Fragment);

  function OtherPage() {
    _classCallCheck(this, OtherPage);

    return _possibleConstructorReturn(this, (OtherPage.__proto__ || Object.getPrototypeOf(OtherPage)).call(this, _OtherPage2.default));
  }

  _createClass(OtherPage, [{
    key: 'doButton1Click',
    value: function doButton1Click() {
      var _this2 = this;

      setInterval(function () {
        _this2.progressBar.progress += 1;
      }, 50);
    }
  }]);

  return OtherPage;
}(NX.Fragment);

},{"./OtherPage.view":"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\pages\\OtherPage.view.js"}],"C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\pages\\OtherPage.view.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  _: 'VBox',
  align: ['center', 'center'],
  padding: 20,
  spacing: 10,
  _content: [{ _: 'Button',
    id: 'button1',
    kind: 'primary',
    text: '<b>Hello</b> World',
    textType: 'html',
    contentDisplay: 'top',
    on: {
      click: 'doButton1Click'
    }
  }, { _: 'ImageView',
    id: 'imageView',
    size: [300, 300],
    displayType: 'resized',
    centered: true,
    source: 'https://cdn1.iconfinder.com/data/icons/ampola-final-by-ampeross/256/html_icon.png'
  }, { _: 'TextArea',
    id: 'checkbox',
    wrap: 'hard',
    placeholder: 'Check It!',
    on: {
      click: 'doCheckboxClick'
    }
  }, { _: 'ProgressBar', id: 'progressBar',
    progress: 0, striped: true, animated: true, kind: 'success'
  }]
};

},{}]},{},["C:\\Users\\zaitsev.REKSOFT\\IdeaProjects\\ux-engine\\build\\app\\app.js"])

//# sourceMappingURL=app.js.map
