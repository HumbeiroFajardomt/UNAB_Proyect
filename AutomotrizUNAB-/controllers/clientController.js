import clientModel from "../models/clientModel.js";
import bcrypt from "bcrypt";

// Create

export async function createClient(req, res) {
  const client = req.body;
  const { password } = client;
  const salt = await bcrypt.genSalt(10);
  const encritedPassword = await bcrypt.hash(password, salt);
  client.password = encritedPassword;

  let document;

  try {
    document = await clientModel.create(client);
  } catch (error) {
    res.status(401);
    res.json(error);
    return;
  }
  res.status(201);
  res.json(document);
}

// Read

export async function readClient(req, res) {
  const id_Client = req.params.id_Client;
  let document;
  try {
    document = await clientModel.find({ id_Client });
  } catch (error) {
    res.status(401);
    res.json(error);
  }

  res.status(201);
  res.json(document);
}
//Update

export async function updateClient(req, res) {
  const { id_Client } = req.params;
  const { changes } = req.body;

  let document;

  try {
    document = await clientModel.updateOne({ id_Client: id_Client }, changes);
  } catch (error) {
    res.status(401);
    res.json(error);
  }

  res.status(201);
  res.json(document);
}

//delete

export async function deleteClient(req, res) {
  const { id_Client } = req.params;

  let document;
  try {
    document = await clientModel.findOneAndDelete({ id_Client: id_Client });
  } catch (error) {
    res.status(401), res.json(error);
  }
  res.status(200);
  res.json(document);
}
