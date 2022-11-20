import mongoose, { Schema } from "mongoose";

const alimentSchema = new Schema({
  nom: String,
  type: String,
  quantite: String,
  date: { type: Date, default: Date.now },
});
const AlimentModel = mongoose.model("Aliment", alimentSchema);

export class Aliment {
  public static async getAllAliments(): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.find());
    });
  }
  public static async getOneAliment(id: String) {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.findById({ _id: id }));
    });
  }

  public static async getAlimentsParType(type: String): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.find({ type: type }));
    });
  }
  public static async insertAliment(body: {
    nom: string;
    type: string;
    quantite: number;
  }) {
    const aliment = new AlimentModel({
      nom: body.nom,
      type: body.type,
      quantite: body.quantite,
      date: new Date(),
    });
    return await aliment.save();
  }

  public static async updateAliment(
    id: String,
    body: { nom: string; type: string; quantite: number }
  ) {
    return AlimentModel.findByIdAndUpdate(
      { _id: id },
      {
        nom: body.nom,
        type: body.type,
        quantite: body.quantite,
        date: new Date(),
      },
      { new: true }
    );
  }

  public static async deleteAliment(id: String) {
    return AlimentModel.findByIdAndDelete({ _id: id });
  }
}
