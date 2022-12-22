import componentModel from "../models/componentModel.js";

export async function createComponent(req, res) {
  const component = req.body;

  let document;

  try {
    document = await componentModel.create(component);
  } catch (error) {
    res.status(401);
    res.json(error);
  }
  res.status(201);
  res.json(document);
}

export async function readComponent(req, res) {
  const id_component = req.params.id_component;

  let document;
  try {
    document = await componentModel.find({ id_component });
  } catch (error) {
    res.status(401);
    res.json(error);
  }

  res.status(201);
  res.json(document);
}

export async function updateComponent(req, res) {
  const { id_component } = req.params;
  const { changes } = req.body;

  let document;
  try {
    document = await componentModel.updateOne(
      { id_components: id_component },
      changes
    );
  } catch (error) {
    res.status(401);
    res.json(error);
  }

  res.status(201);
  res.json(document);
}

export async function deleteComponent(req, res) {
  const { id_component } = req.params;

  let document;
  try {
    document = await componentModel.findOneAndDelete({
      id_components: id_component,
    });
  } catch (error) {
    res.status(401);
    res.json(error);
  }

  res.status(200);
  res.json(document);
}
