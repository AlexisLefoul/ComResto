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
exports.ControlerAliment = void 0;
var aliments_1 = require("../models/aliments");
var ControlerAliment = /** @class */ (function () {
    function ControlerAliment() {
    }
    /**
     * @swagger
     * /aliments:
     *    get:
     *      tags:
     *        - Aliments
     *      summary: Retourne la liste des aliments
     *      description:
     *      responses:
     *        200:
     *          description: Liste des aliments.
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  data:
     *                    type: array
     *                    items:
     *                      type: object
     *                      properties:
     *                        id:
     *                          type: string
     *                          description: L'ID de l'aliment
     *                          example: 0
     *                        nom:
     *                          type: string
     *                          description: Le nom de l'aliment.
     *                          example: Carotte
     *                        type:
     *                          type: string
     *                          description: Le type de l'aliment.
     *                          example: L??gume
     *                        quantit??:
     *                          type: number
     *                          description: La quantit?? de l'aliment.
     *                          example: 10
     */
    ControlerAliment.getAliments = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listeAliments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, aliments_1.Aliment.getAllAliments()];
                    case 1:
                        listeAliments = _a.sent();
                        res.send(listeAliments);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /aliments/:id:
     *    get:
     *      tags:
     *        - Aliments
     *      summary: Retourne un aliment
     *      parameters:
     *        - in: path
     *          name: id
     *          type: string
     *          description: L'id de l'aliment.
     *          required: true
     *      description:
     *      responses:
     *        200:
     *          description: Un aliment.
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  id:
     *                    type: string
     *                    description: L'ID de l'aliment
     *                    example: 0
     *                  nom:
     *                    type: string
     *                    description: Le nom de l'aliment.
     *                    example: Carotte
     *                  type:
     *                    type: string
     *                    description: Le type de l'aliment.
     *                    example: L??gume
     *                  quantit??:
     *                    type: number
     *                    description: La quantit?? de l'aliment.
     *                    example: 10
     */
    ControlerAliment.getOneAliments = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var alimentId, listeAliments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alimentId = req.params.id;
                        return [4 /*yield*/, aliments_1.Aliment.getOneAliment(alimentId)];
                    case 1:
                        listeAliments = _a.sent();
                        res.send(listeAliments);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /aliments/type/:type:
     *    get:
     *      tags:
     *        - Aliments
     *      summary: Retourne une liste des aliments du type choisi
     *      parameters:
     *        - in: path
     *          name: type
     *          type: string
     *          description: Le type des aliments.
     *          required: true
     *      description:
     *      responses:
     *        200:
     *          description: Liste des aliments.
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  data:
     *                    type: array
     *                    items:
     *                      type: object
     *                      properties:
     *                        id:
     *                          type: string
     *                          description: L'ID de l'aliment
     *                          example: 0
     *                        nom:
     *                          type: string
     *                          description: Le nom de l'aliment.
     *                          example: Carotte
     */
    ControlerAliment.getAlimentsParType = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var alimentType, listeAlimentsParType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alimentType = req.params.type;
                        return [4 /*yield*/, aliments_1.Aliment.getAlimentsParType(alimentType)];
                    case 1:
                        listeAlimentsParType = _a.sent();
                        res.send(listeAlimentsParType);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /aliments/add:
     *    post:
     *      tags:
     *        - Aliments
     *      summary: Insert d'un nouvel aliment en base
     *      parameters:
     *        - in: body
     *          name: aliment
     *          type: object
     *          description: Les donn??es de l'aliment ?? ajouter
     *          schema:
     *            type: object
     *            properties:
     *              nom:
     *                type: string
     *                description: Le nom de l'aliment.
     *                example: Carotte
     *              type:
     *                type: string
     *                description: Le type de l'aliment.
     *                example: L??gume
     *              quantite:
     *                type: number
     *                description: La quantite de l'aliment.
     *                example: 10
     *      description:
     *      responses:
     *        201:
     *          description: Aliment ajout??.
     */
    ControlerAliment.insertAliment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, aliments_1.Aliment.insertAliment(req.body)];
                    case 1:
                        _a.sent();
                        res.status(201);
                        res.send();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /aliments/update/:id:
     *    put:
     *      tags:
     *        - Aliments
     *      summary: Update d'un aliment en base
     *      parameters:
     *        - in: path
     *          name: id
     *          type: string
     *          description: L'id de l'aliment ?? mettre ?? jour.
     *          required: true
     *        - in: body
     *          name: aliment
     *          type: object
     *          description: Les donn??es de l'aliment ?? mettre ?? jour
     *          schema:
     *            type: object
     *            properties:
     *              nom:
     *                type: string
     *                description: Le nom de l'aliment.
     *                example: Carotte
     *              type:
     *                type: string
     *                description: Le type de l'aliment.
     *                example: L??gume
     *              quantite:
     *                type: number
     *                description: La quantite de l'aliment.
     *                example: 10
     *      description:
     *      responses:
     *        204:
     *          description: Aliment mit ?? jour.
     */
    ControlerAliment.updateAliment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, aliments_1.Aliment.updateAliment(req.params.id, req.body)];
                    case 1:
                        _a.sent();
                        res.status(204);
                        res.send();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /aliments/:id:
     *    delete:
     *      tags:
     *        - Aliments
     *      summary: Supprimer un aliment en base
     *      parameters:
     *        - in: path
     *          name: id
     *          type: string
     *          description: L'id de l'aliment ?? supprimer.
     *          required: true
     *      description:
     *      responses:
     *        204:
     *          description: Aliment supprim??.
     */
    ControlerAliment.deleteAliment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var alimentDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, aliments_1.Aliment.deleteAliment(req.params.id)];
                    case 1:
                        alimentDelete = _a.sent();
                        res.status(204);
                        res.send(alimentDelete);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ControlerAliment;
}());
exports.ControlerAliment = ControlerAliment;
//# sourceMappingURL=controllerAliment.js.map