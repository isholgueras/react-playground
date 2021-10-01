"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _App = _interopRequireDefault(require("../shared/App"));

var _routes = _interopRequireDefault(require("../shared/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // app.use(cors())

app.use(_express["default"]["static"]("public"));
app.get("*", function (req, res, next) {
  var activeRoute = _routes["default"].find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();
  promise.then(function (data) {
    var context = {
      data: data
    };
    var markup = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.StaticRouter, {
      location: req.url,
      context: context
    }, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <script src=\"/bundle.js\" defer></script>\n          <script>window.__INITIAL_DATA__ = ".concat((0, _serializeJavascript["default"])(data), "</script>\n        </head>\n        <body>\n          <div id=\"root\">").concat(markup, "</div>\n        </body>\n      </html>\n    "));
  })["catch"](next);
});
app.listen(3050, function () {
  console.log("Server is listening on port: 3050");
});