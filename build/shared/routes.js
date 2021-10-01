"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _About = _interopRequireDefault(require("./pages/About"));

var _Pricing = _interopRequireDefault(require("./pages/Pricing"));

var _Home = _interopRequireDefault(require("./pages/Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  exact: true,
  component: _Home["default"]
}, {
  path: '/about',
  component: _About["default"]
}, {
  path: '/pricing',
  component: _Pricing["default"]
}];
var _default = routes;
exports["default"] = _default;