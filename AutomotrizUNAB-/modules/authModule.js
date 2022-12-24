import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import { getToken } from "./tokenGenerator.js";

export async function loginAccess(req, res) {
  try {
    const { id_User, password } = req.headers;
    const document = await userModel.find({ id_User: id_User });
    const access = await bcrypt.compare(password, document.password);
    if (access) {
      const token = getToken(id_User);
      res.status(401).json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json(error.message);
  }
}
