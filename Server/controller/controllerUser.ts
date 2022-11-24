import { User } from "../models/user";

export class ControlerUser {
  /**
   * @swagger
   * /user/:identifiant:
   *    get:
   *      tags:
   *        - Utilisateurs
   *      summary: Retourne un utilisateur
   *      parameters:
   *        - in: path
   *          name: identifiant
   *          type: string
   *          description: L'identifiant de l'utilisateur.
   *          required: true
   *      description:
   *      responses:
   *        200:
   *          description: Un utilisateur.
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  id:
   *                    type: string
   *                    description: L'ID de l'utilisateur
   *                    example: 0
   *                  identifiant:
   *                    type: string
   *                    description: L'identifiant de l'utilisateur.
   *                    example: Aurélien
   *                  password:
   *                    type: string
   *                    description: Le mot de passe hashé de l'utilisateur.
   *                    example: $2a$10$CwT
   *                  role:
   *                    type: string
   *                    description: Le role de l'utilisateur.
   *                    example: client
   */

  public static async getUser(req, res) {
    let userName: String = req.params.identifiant;
    let user = await User.getUser(userName);
    res.send(user);
  }

  /**
   * @swagger
   * /user/add:
   *    post:
   *      tags:
   *        - Utilisateurs
   *      summary: Ajoute un utilisateur
   *      parameters:
   *        - in: body
   *          name: utilisateur
   *          type: object
   *          description: Les données de l'utilisateur à ajouter
   *          schema:
   *            type: object
   *            properties:
   *              identifiant:
   *                type: string
   *                description: L'identifiant de l'utilisateur.
   *                example: Awen
   *              password:
   *                type: string
   *                description: Le mot de passe hashé de l'utilisateur.
   *                example: $2a$10$CwT
   *              role:
   *                type: string
   *                description: Le role de l'utilisateur.
   *                example: client
   *      description:
   *      responses:
   *        200:
   *          description: Utilisateur ajouté.
   */

  public static async insertUser(req, res) {
    await User.insertUser(req.body);
    res.status(201);
    res.send();
  }
}
