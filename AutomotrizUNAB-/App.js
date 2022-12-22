mongoose.set("strictQuery", false);
import express from "express";
import mongoose from "mongoose";
import routerClients from "./routes/clientRoutes.js";
import routerComponents from "./routes/componentRoutes.js";
import routerLogin from "./routes/loginRouter.js";
import routerMessage from "./routes/messageRoute.js";
import cors from "cors";
import routerUser from "./routes/userRoutes.js";

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is working on AutomotrizUNAB");
});

// Usar metodo para conectar con mongoose Clouster no base de datos
// para la base de datos antes del ? en la uri poner el nombre de la BD y hay se conecta a la BD
mongoose.connect(
  "mongodb+srv://AutomotrizUNAB:AutomotrizUNAB@cluster0.jgp5pel.mongodb.net/AutomotrizUNAB?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("It's Connected to DB AutomotrizUNAB");
    }
  }
);

//Express a que entienda Json
//middleware function in Express
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/clients", routerClients);
app.use("/user", routerUser);
app.use("/components", routerComponents);
app.use("/messages", routerMessage);
app.use("/login", routerLogin);
