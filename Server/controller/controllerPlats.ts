import { Plat } from "../models/plats";

export class ControlerPlat {
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

  public static async getPlats(req, res) {
    let listePlats = await Plat.getAllPlats();
    res.send(listePlats);
  }

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

  public static async getOnPlats(req, res) {
    let platId: String = req.params.id;
    let listePlats = await Plat.getOnPlat(platId);
    res.send(listePlats);
  }

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

  public static async getPlatsParType(req, res) {
    let platType: String = req.params.type;
    let listePlatsParType = await Plat.getPlatsParType(platType);
    res.send(listePlatsParType);
  }

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

  public static async insertPlat(req, res) {
    await Plat.insertPlat(req.body);
    res.status(201);
    res.send();
  }

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

  public static async updatePlat(req, res) {
    await Plat.updatePlat(req.params.id, req.body);
    res.status(201);
    res.send();
  }

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

  public static async deletePlat(req, res) {
    let platDelete = await Plat.deletePlat(req.params.id);
    res.status(204);
    res.send(platDelete);
  }
}
