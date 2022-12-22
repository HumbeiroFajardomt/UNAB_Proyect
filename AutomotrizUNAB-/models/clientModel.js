import mongoose from "mongoose";

const clientModel = mongoose.Schema({
  id_Client: { type: Number, required: true },
  name: { type: String, maxlength: 30, minlength: 3, required: true },
  age: { type: Number, min: 2, max: 100, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("client", clientModel);
