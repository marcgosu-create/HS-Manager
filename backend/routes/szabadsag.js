import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getSzabadsag,
    createSzabadsag,
    deleteSzabadsag
} from "../controllers/szabadsagController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin", "boss"]), getSzabadsag);
router.post("/", auth, authorize(["boss", "mainboss"]), createSzabadsag);
router.delete("/:id", auth, authorize(["mainboss"]), deleteSzabadsag);

export default router;
