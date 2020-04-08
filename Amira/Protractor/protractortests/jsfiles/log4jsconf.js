"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log4jsconf = /** @class */ (function () {
    function log4jsconf() {
    }
    log4jsconf.log = function () {
        var log4js = require("log4js");
        log4js.configure('./log4js.json');
        var log = log4js.getLogger("file");
        return log;
    };
    return log4jsconf;
}());
exports.log4jsconf = log4jsconf;
//# sourceMappingURL=log4jsconf.js.map