import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  identifiant: String,
  password: String,
  role: String,
});
const userModel = mongoose.model("Utilisateurs", userSchema);

export class User {
  public static async getUser(identifiant: String) {
    return new Promise(async (resolve) => {
      resolve(await userModel.findOne({ identifiant: identifiant }));
    });
  }

  public static async insertUser(body: {
    identifiant: string;
    password: string;
    role: string;
  }) {
    const user = new userModel({
      identifiant: body.identifiant,
      password: body.password,
      role: body.role,
    });
    return await user.save();
  }
}
