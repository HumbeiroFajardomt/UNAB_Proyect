import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

// Create

export async function createUser(req, res) {
  const user = req.body;
  const { password } = user;
  const salt = await bcrypt.genSalt(10);
  const encritedPassword = await bcrypt.hash(password, salt);
  user.password = encritedPassword;

  let document;

  try {
    document = await userModel.create(user);
  } catch (error) {
    res.status(401);
    res.json(error);
    return;
  }
  res.status(201);
  res.json(document);
}

// Read

export async function readUser(req, res) {
  const id_User = req.params.id_User;
  let document;
  try {
    document = await userModel.find({ id_User });
  } catch (error) {
    res.status(401);
    res.json(error);
  }

  res.status(201);
  res.json(document);
}
//Update

export async function updateUser(req, res) {
  const { id_User } = req.params;
  const { changes } = req.body;

  let document;

  try {
    document = await userModel.updateOne({ id_User: id_User }, changes);
  } catch (error) {
    res.status(401);
    res.json(error);
  }

  res.status(201);
  res.json(document);
}

//delete

export async function deleteUser(req, res) {
  const { id_User } = req.params;

  let document;
  try {
    document = await userModel.findOneAndDelete({ id_User: id_User });
  } catch (error) {
    res.status(401), res.json(error);
  }
  res.status(200);
  res.json(document);
}
