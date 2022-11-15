import mongoose, { Schema } from "mongoose";

const platSchema = new Schema({
  nom: String,
  type: String,
  aliments: [{ nom: String, quantite: Number, idAliment: String }],
  prix: Number,
});
const platModel = mongoose.model("Plat", platSchema);

export class Plat {
  public static async getAllPlats(): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await platModel.find());
    });
  }
  public static async getOnPlat(id: String) {
    return new Promise(async (resolve) => {
      resolve(await platModel.find({ _id: id }));
    });
  }

  public static async getPlatsParType(type: String): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await platModel.find({ type: type }));
    });
  }
  public static async insertPlat(body: {
    nom: string;
    type: string;
    aliments: [{ nom: string; quantite: number; idAliment: string }];
    prix: number;
  }) {
    const plat = new platModel({
      nom: body.nom,
      type: body.type,
      aliments: body.aliments,
      prix: body.prix,
    });
    return await plat.save();
  }

  public static async updatePlat(
    id: String,
    body: {
      nom: string;
      type: string;
      aliments: [{ nom: string; quantite: number; idAliment: string }];
      prix: number;
    }
  ) {
    return platModel.findByIdAndUpdate(
      { _id: id },
      {
        nom: body.nom,
        type: body.type,
        aliments: body.aliments,
        prix: body.prix,
      },
      { new: true }
    );
  }

  public static async deletePlat(id: String) {
    return platModel.findByIdAndDelete({ _id: id });
  }
}
