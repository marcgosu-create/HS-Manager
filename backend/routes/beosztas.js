import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getBeosztas,
    createBeosztas,
    deleteBeosztas
} from "../controllers/beosztasController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin", "boss"]), getBeosztas);
router.post("/", auth, authorize(["boss", "mainboss"]), createBeosztas);
router.delete("/:id", auth, authorize(["mainboss"]), deleteBeosztas);

export default router;
