"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlerPlat = void 0;
var plats_1 = require("../models/plats");
var ControlerPlat = /** @class */ (function () {
    function ControlerPlat() {
    }
    ControlerPlat.getPlats = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listePlats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, plats_1.Plat.getAllPlats()];
                    case 1:
                        listePlats = _a.sent();
                        res.send(listePlats);
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlerPlat.getOnPlats = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var platId, listePlats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        platId = req.params.id;
                        return [4 /*yield*/, plats_1.Plat.getOnPlat(platId)];
                    case 1:
                        listePlats = _a.sent();
                        res.send(listePlats);
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlerPlat.getPlatsParType = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var platType, listePlatsParType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        platType = req.params.type;
                        return [4 /*yield*/, plats_1.Plat.getPlatsParType(platType)];
                    case 1:
                        listePlatsParType = _a.sent();
                        res.send(listePlatsParType);
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlerPlat.insertPlat = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, plats_1.Plat.insertPlat(req.body)];
                    case 1:
                        _a.sent();
                        res.status(201);
                        res.send();
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlerPlat.updatePlat = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, plats_1.Plat.updatePlat(req.params.id, req.body)];
                    case 1:
                        _a.sent();
                        res.status(201);
                        res.send();
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlerPlat.deletePlat = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var platDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, plats_1.Plat.deletePlat(req.params.id)];
                    case 1:
                        platDelete = _a.sent();
                        res.status(204);
                        res.send(platDelete);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ControlerPlat;
}());
exports.ControlerPlat = ControlerPlat;
//# sourceMappingURL=controllerPlats.js.map