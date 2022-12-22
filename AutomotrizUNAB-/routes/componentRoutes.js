import express from "express";
import { createComponent, deleteComponent, readComponent, updateComponent } from "../controllers/componentController.js";

const router = express.Router();


router.post("/", createComponent);
router.get("/:id_component", readComponent);
router.patch("/:id_component",updateComponent);
router.delete("/:id_component",deleteComponent);


export default router;