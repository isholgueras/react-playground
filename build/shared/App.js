"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./App.css");

var _routes = _interopRequireDefault(require("./routes"));

var _Navbar = _interopRequireDefault(require("./components/Navbar"));

var _NotFound = _interopRequireDefault(require("./pages/NotFound"));

var _excluded = ["path", "exact", "component"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "My app"), /*#__PURE__*/_react["default"].createElement(_Navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, _routes["default"].map(function (_ref) {
    var path = _ref.path,
        exact = _ref.exact,
        Component = _ref.component,
        rest = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      key: path,
      path: path,
      exact: exact,
      render: function render(props) {
        return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, rest));
      }
    });
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    render: function render(props) {
      return /*#__PURE__*/_react["default"].createElement(_NotFound["default"], props);
    }
  })));
}

var _default = App;
exports["default"] = _default;