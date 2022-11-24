import { Aliment } from "../models/aliments";

export class ControlerAliment {
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
   *                          example: Légume
   *                        quantité:
   *                          type: number
   *                          description: La quantité de l'aliment.
   *                          example: 10
   */

  public static async getAliments(req, res) {
    let listeAliments = await Aliment.getAllAliments();
    res.send(listeAliments);
  }

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
   *                    example: Légume
   *                  quantité:
   *                    type: number
   *                    description: La quantité de l'aliment.
   *                    example: 10
   */

  public static async getOneAliments(req, res) {
    let alimentId: String = req.params.id;
    let listeAliments = await Aliment.getOneAliment(alimentId);
    res.send(listeAliments);
  }

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

  public static async getAlimentsParType(req, res) {
    let alimentType: String = req.params.type;
    let listeAlimentsParType = await Aliment.getAlimentsParType(alimentType);
    res.send(listeAlimentsParType);
  }

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
   *          description: Les données de l'aliment à ajouter
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
   *                example: Légume
   *              quantite:
   *                type: number
   *                description: La quantite de l'aliment.
   *                example: 10
   *      description:
   *      responses:
   *        201:
   *          description: Aliment ajouté.
   */

  public static async insertAliment(req, res) {
    await Aliment.insertAliment(req.body);
    res.status(201);
    res.send();
  }

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
   *          description: L'id de l'aliment à mettre à jour.
   *          required: true
   *        - in: body
   *          name: aliment
   *          type: object
   *          description: Les données de l'aliment à mettre à jour
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
   *                example: Légume
   *              quantite:
   *                type: number
   *                description: La quantite de l'aliment.
   *                example: 10
   *      description:
   *      responses:
   *        204:
   *          description: Aliment mit à jour.
   */

  public static async updateAliment(req, res) {
    await Aliment.updateAliment(req.params.id, req.body);
    res.status(204);
    res.send();
  }

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
   *          description: L'id de l'aliment à supprimer.
   *          required: true
   *      description:
   *      responses:
   *        204:
   *          description: Aliment supprimé.
   */

  public static async deleteAliment(req, res) {
    let alimentDelete = await Aliment.deleteAliment(req.params.id);
    res.status(204);
    res.send(alimentDelete);
  }
}
