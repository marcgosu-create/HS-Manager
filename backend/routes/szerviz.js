import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getSzerviz,
    createSzerviz,
    deleteSzerviz
} from "../controllers/szervizController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin", "boss"]), getSzerviz);
router.post("/", auth, authorize(["boss", "mainboss"]), createSzerviz);
router.delete("/:id", auth, authorize(["mainboss"]), deleteSzerviz);

export default router;
