import express from "express";
import {
  createUser,
  deleteUser,
  readUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/:id_User", readUser);
router.patch("/:id_User", updateUser);
router.delete("/:id_User", deleteUser);

export default router;
