import clientModel from "../models/clientModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN =
  "e13b1b700bce0f5bcdd9ca6c0af78cc70266b7323d7d6f25a1714e64f6ec828c9c777ed0eeed39622fbfe46979c57a68cb532ab33082488be86708e8dd53c33e";

export default async function login(req, res) {
  //usualmente o no viene en el cuerpo  viene en le header
  const { user, password } = req.headers;

  if (user == null || password == null) {
    res.sendStatus(401);
    return;
  }

  const userData = await clientModel.findOne({ id_Client: user });
  if (userData == null) {
    res, sendStatus(401);
    return;
  }

  const validation = await bcrypt.compare(password, userData.password);

  if (validation) {
    const token = jwt.sign(user, ACCESS_TOKEN);
    res.status(200).json({ token });
  } else {
    res.sendStatus(401);
  }
}
