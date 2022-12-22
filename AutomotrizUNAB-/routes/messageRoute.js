import express from "express";
import { createMessage, deleteMessage, readMessage, updateMessage } from "../controllers/messageController.js";


const router = express.Router();

router.post("/",createMessage);
router.get("/:id_Message",readMessage);
router.patch("/:id_Message",updateMessage);
router.delete("/:id_Message",deleteMessage);



export default router;