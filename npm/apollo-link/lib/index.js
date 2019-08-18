"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../../tslib/tslib.js");
tslib_1.__exportStar(require("./link.js"), exports);
var linkUtils_1 = require("./linkUtils.js");
exports.createOperation = linkUtils_1.createOperation;
exports.makePromise = linkUtils_1.makePromise;
exports.toPromise = linkUtils_1.toPromise;
exports.fromPromise = linkUtils_1.fromPromise;
exports.fromError = linkUtils_1.fromError;
exports.getOperationName = linkUtils_1.getOperationName;
var zen_observable_ts_1 = tslib_1.__importDefault(require("../../zen-observable-ts/lib/index.js"));
exports.Observable = zen_observable_ts_1.default;
//# sourceMappingURL=index.js.map