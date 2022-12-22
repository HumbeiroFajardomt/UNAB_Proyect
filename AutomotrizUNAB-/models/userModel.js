import mongoose from "mongoose";

const userModel = mongoose.Schema({
  id_User: { type: Number, required: true },
  name: { type: String, maxlength: 30, minlength: 3, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("user", userModel);
