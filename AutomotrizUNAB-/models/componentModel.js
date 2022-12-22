import mongoose from "mongoose";

const mantenimiento = ["Proceso", "Reparado", "Instalado", "Inspeccion"];

const componentsModel = mongoose.Schema({
  id_component: { type: Number, required: true },
  name: { type: String, maxlength: 30, minlength: 3, required: true },
  brand: { type: String, maxlength: 30, minlength: 3, required: true },
  year: { type: String, required: true },
  description: { type: String, required: true, enum: mantenimiento },
});
export default mongoose.model("component", componentsModel);
