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
var controllerAliment_1 = require("./controller/controllerAliment");
var controllerPlats_1 = require("./controller/controllerPlats");
var controllerUser_1 = require("./controller/controllerUser");
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
/**
 * On créé une nouvelle "application" express
 */
var app = express();
/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", request.headers.origin);
    response.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    response.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE,OPTIONS");
    response.header("Access-Control-Allow-Credentials", "true");
    next();
});
// Default
app.get("/", function (req, res) { return res.send("🏠"); });
// GET Aliments
app.get("/aliments", function (req, res) { return controllerAliment_1.ControlerAliment.getAliments(req, res); });
app.get("/aliments/:id", function (req, res) {
    return controllerAliment_1.ControlerAliment.getOneAliments(req, res);
});
app.get("/aliments/type/:type", function (req, res) {
    return controllerAliment_1.ControlerAliment.getAlimentsParType(req, res);
});
// GET Plats
app.get("/plats", function (req, res) { return controllerPlats_1.ControlerPlat.getPlats(req, res); });
app.get("/plats/:id", function (req, res) { return controllerPlats_1.ControlerPlat.getOnPlats(req, res); });
app.get("/plats/type/:type", function (req, res) {
    return controllerPlats_1.ControlerPlat.getPlatsParType(req, res);
});
// GET Utilisateur
app.get("/user/:identifiant", function (req, res) { return controllerUser_1.ControlerUser.getUser(req, res); });
// POST Aliments
app.post("/aliments/add", function (req, res) {
    return controllerAliment_1.ControlerAliment.insertAliment(req, res);
});
app.put("/aliments/update/:id", function (req, res) {
    return controllerAliment_1.ControlerAliment.updateAliment(req, res);
});
// POST Plats
app.post("/plats/add", function (req, res) { return controllerPlats_1.ControlerPlat.insertPlat(req, res); });
app.put("/plats/update/:id", function (req, res) { return controllerPlats_1.ControlerPlat.updatePlat(req, res); });
// POST User
app.post("/user/add", function (req, res) { return controllerUser_1.ControlerUser.insertUser(req, res); });
// DELETE
app.delete("/aliments/:id", function (req, res) {
    return controllerAliment_1.ControlerAliment.deleteAliment(req, res);
});
app.delete("/plats/:id", function (req, res) { return controllerPlats_1.ControlerPlat.deletePlat(req, res); });
app.listen(3000, function () {
    "Serveur listening on port :3000";
});
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose.connect("mongodb://localhost/Gestion_stock")];
                case 1:
                    _a.sent();
                    console.log("Connexion mongoose ok");
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) { return console.log(err); });
var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
//# sourceMappingURL=app.js.map