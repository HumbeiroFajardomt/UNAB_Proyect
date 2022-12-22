import express from "express";
import {
  createClient,
  deleteClient,
  readClient,
  updateClient,
} from "../controllers/clientController.js";

const router = express.Router();

router.post("/", createClient);
router.get("/:id_Client", readClient);
router.patch("/:id_Client", updateClient);
router.delete("/:id_Client", deleteClient);

export default router;
