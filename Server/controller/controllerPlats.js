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
    /**
   * @swagger
   * /plats:
   *    get:
   *      tags:
   *        - Plats
   *      summary: Retourne la liste des plats
   *      description:
   *      responses:
   *        200:
   *          description: Liste des plats.
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
   *                          description: L'ID du plat
   *                          example: 0
   *                        nom:
   *                          type: string
   *                          description: Le nom du plat.
   *                          example: Pizza Pomme
   *                        type:
   *                          type: string
   *                          description: Le type du plat.
   *                          example: Plat
   *                        prix:
   *                          type: number
   *                          description: Le prix du plat.
   *                          example: 10 €
   *                        aliments:
   *                          type: array
   *                          description: List d'aliments qui sont dans le plat.
   *                          items:
   *                            type: object
   *                            properties:
   *                              id:
   *                                type: string
   *                                description: L'ID de l'aliment
   *                                example: 0
   *                              nom:
   *                                 type: string
   *                                 description: Le nom de l'aliment.
   *                                 example: Carotte
   *                              type:
   *                                  type: string
   *                                  description: Le type de l'aliment.
   *                                  example: Légume
   *                              quantité:
   *                                  type: number
   *                                  description: La quantité de l'aliment.
   *                                  example: 10
   */
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
    /**
   * @swagger
   * /plats/:id:
   *    get:
   *      tags:
   *        - Plats
   *      summary: Retourne un plat
   *      parameters:
   *        - in: path
   *          name: id
   *          type: string
   *          description: L'id du plat.
   *          required: true
   *      description:
   *      responses:
   *        200:
   *          description: Un plat.
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  id:
   *                    type: string
   *                    description: L'ID du plat
   *                    example: 0
   *                  nom:
   *                    type: string
   *                    description: Le nom du plat.
   *                    example: Pizza Pomme
   *                  type:
   *                    type: string
   *                    description: Le type du plat.
   *                    example: Plat
   *                  prix:
   *                    type: number
   *                    description: Le prix du plat.
   *                    example: 10 €
   *                  aliments:
   *                    type: array
   *                    description: List d'aliments qui sont dans le plat.
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
   *                          example: Légume
   *                        quantité:
   *                          type: number
   *                          description: La quantité de l'aliment.
   *                          example: 10
   */
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
    /**
    * @swagger
    * /plats/type/:type:
    *    get:
    *      tags:
    *        - Plats
    *      summary: Retourne une liste des plats du type choisi
    *      parameters:
    *        - in: path
    *          name: type
    *          type: string
    *          description: Le type des plats.
    *          required: true
    *      description:
    *      responses:
    *        200:
    *          description: Liste des plats.
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
    *                          description: L'ID du plat
    *                          example: 0
    *                        nom:
    *                          type: string
    *                          description: Le nom du plat.
    *                          example: Pizza Pomme
    *                        type:
    *                          type: string
    *                          description: Le type du plat.
    *                          example: Plat
    *                        prix:
    *                          type: number
    *                          description: Le prix du plat.
    *                          example: 10 €
    *                        aliments:
    *                          type: array
    *                          description: List d'aliments qui sont dans le plat.
    *                          items:
    *                            type: object
    *                            properties:
    *                              id:
    *                                type: string
    *                                description: L'ID de l'aliment
    *                                example: 0
    *                              nom:
    *                                 type: string
    *                                 description: Le nom de l'aliment.
    *                                 example: Carotte
    *                              type:
    *                                  type: string
    *                                  description: Le type de l'aliment.
    *                                  example: Légume
    *                              quantité:
    *                                  type: number
    *                                  description: La quantité de l'aliment.
    *                                  example: 10
    */
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
    /**
    * @swagger
    * /plats/add:
    *    post:
    *      tags:
    *        - Plats
    *      summary: Insert d'un nouveau plat en base
    *      parameters:
    *        - in: body
    *          name: plat
    *          type: object
    *          description: Les données du plat à ajouter
    *          schema:
    *            type: object
    *            properties:
    *              id:
    *                type: string
    *                description: L'ID du plat
    *                example: 0
    *              nom:
    *                type: string
    *                description: Le nom du plat.
    *                example: Pizza Pomme
    *              type:
    *                type: string
    *                description: Le type du plat.
    *                example: Plat
    *              prix:
    *                type: number
    *                description: Le prix du plat.
    *                example: 10 €
    *              aliments:
    *                type: array
    *                description: List d'aliments qui sont dans le plat.
    *                items:
    *                  type: object
    *                  properties:
    *                    id:
    *                      type: string
    *                      description: L'ID de l'aliment
    *                      example: 0
    *                    nom:
    *                      type: string
    *                      description: Le nom de l'aliment.
    *                      example: Carotte
    *                    type:
    *                      type: string
    *                      description: Le type de l'aliment.
    *                      example: Légume
    *                    quantité:
    *                      type: number
    *                      description: La quantité de l'aliment.
    *                      example: 10
    *      description:
    *      responses:
    *        201:
    *          description: Plat ajouté.
    */
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
    /**
   * @swagger
   * /plats/update/:id:
   *    put:
   *      tags:
   *        - Plats
   *      summary: Update d'un plat en base
   *      parameters:
   *        - in: path
   *          name: id
   *          type: string
   *          description: L'id du plat à mettre à jour.
   *          required: true
   *        - in: body
   *          name: plat
   *          type: object
   *          description: Les données du plat à mettre à jour
   *          schema:
   *            type: object
   *            properties:
   *              id:
   *                type: string
   *                description: L'ID du plat
   *                example: 0
   *              nom:
   *                type: string
   *                description: Le nom du plat.
   *                example: Pizza Pomme
   *              type:
   *                type: string
   *                description: Le type du plat.
   *                example: Plat
   *              prix:
   *                type: number
   *                description: Le prix du plat.
   *                example: 10 €
   *              aliments:
   *                type: array
   *                description: List d'aliments qui sont dans le plat.
   *                items:
   *                  type: object
   *                  properties:
   *                    id:
   *                      type: string
   *                      description: L'ID de l'aliment
   *                      example: 0
   *                    nom:
   *                      type: string
   *                      description: Le nom de l'aliment.
   *                      example: Carotte
   *                    type:
   *                      type: string
   *                      description: Le type de l'aliment.
   *                      example: Légume
   *                    quantité:
   *                      type: number
   *                      description: La quantité de l'aliment.
   *                      example: 10
   *      description:
   *      responses:
   *        201:
   *          description: Plat mit à jour.
   */
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
    /**
   * @swagger
   * /plats/:id:
   *    delete:
   *      tags:
   *        - Plats
   *      summary: Supprimer un plat en base
   *      parameters:
   *        - in: path
   *          name: id
   *          type: string
   *          description: L'id du plat à supprimer.
   *          required: true
   *      description:
   *      responses:
   *        204:
   *          description: Plat supprimé.
   */
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