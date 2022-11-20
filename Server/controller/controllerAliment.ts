import { Aliment } from "../models/aliments";

export class ControlerAliment {
  public static async getAliments(req, res) {
    let listeAliments = await Aliment.getAllAliments();
    res.send(listeAliments);
  }

  public static async getOneAliments(req, res) {
    let alimentId: String = req.params.id;
    let listeAliments = await Aliment.getOneAliment(alimentId);
    res.send(listeAliments);
  }

  public static async getAlimentsParType(req, res) {
    let alimentType: String = req.params.type;
    let listeAlimentsParType = await Aliment.getAlimentsParType(alimentType);
    res.send(listeAlimentsParType);
  }

  public static async insertAliment(req, res) {
    await Aliment.insertAliment(req.body);
    res.status(201);
    res.send();
  }

  public static async updateAliment(req, res) {
    await Aliment.updateAliment(req.params.id, req.body);
    res.status(204);
    res.send();
  }

  public static async deleteAliment(req, res) {
    let alimentDelete = await Aliment.deleteAliment(req.params.id);
    res.status(204);
    res.send(alimentDelete);
  }
}
