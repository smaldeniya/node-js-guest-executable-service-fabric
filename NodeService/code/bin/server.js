'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _eureca = require('eureca.io');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var env = process.env;
var port = env["PORT"];
var geoLocation = env["GEO_LOCATION"];

var client = new _eureca.Client({ uri: geoLocation });
var proxyStub = void 0;

app.get('/service', function (req, res) {
    res.status(200);
    res.json({ "service": geoLocation });
});

client.ready(function (proxy) {
    proxyStub = proxy;

    app.get('/test', function (req, res) {
        res.status(200);
        res.json(proxyStub.hasOwnProperty("GetById"));
    });
});

app.listen(port);
console.log('Running on http://localhost');
//# sourceMappingURL=server.js.map
