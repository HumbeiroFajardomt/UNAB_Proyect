import mongoose from "mongoose";

const messageModel = mongoose.Schema({
  id_Message: { type: Number, required: true },
  messageText: { type: String, maxlength: 30, minlength: 3, required: true },
});

export default mongoose.model("message", messageModel);
