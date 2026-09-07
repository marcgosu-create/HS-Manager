import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getElszamolas,
    createElszamolas,
    deleteElszamolas
} from "../controllers/elszamolasController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin", "boss"]), getElszamolas);
router.post("/", auth, authorize(["boss", "mainboss"]), createElszamolas);
router.delete("/:id", auth, authorize(["mainboss"]), deleteElszamolas);

export default router;
