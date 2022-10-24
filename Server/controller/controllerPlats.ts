import { Plat } from "../models/plats";

export class ControlerPlat {
  public static async getPlats(req, res) {
    let listePlats = await Plat.getAllPlats();
    res.send(listePlats);
  }

  public static async getOnPlats(req, res) {
    let platId: String = req.params.id;
    let listePlats = await Plat.getOnPlat(platId);
    res.send(listePlats);
  }

  public static async getPlatsParType(req, res) {
    let platType: String = req.params.type;
    let listePlatsParType = await Plat.getPlatsParType(platType);
    res.send(listePlatsParType);
  }

  public static async insertPlat(req, res) {
    await Plat.insertPlat(req.body);
    res.status(201);
    res.send();
  }

  public static async updatePlat(req, res) {
    await Plat.updatePlat(req.params.id, req.body);
    res.status(201);
    res.send();
  }

  public static async deletePlat(req, res) {
    let platDelete = await Plat.deletePlat(req.params.id);
    res.status(204);
    res.send(platDelete);
  }
}
