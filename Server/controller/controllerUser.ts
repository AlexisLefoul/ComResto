import { User } from "../models/user";

export class ControlerUser {
  public static async getUser(req, res) {
    let userName: String = req.params.identifiant;
    let user = await User.getUser(userName);
    res.send(user);
  }

  public static async insertUser(req, res) {
    await User.insertUser(req.body);
    res.status(201);
    res.send();
  }
}
