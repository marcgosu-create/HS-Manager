import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getKifizetes,
    createKifizetes,
    deleteKifizetes
} from "../controllers/kifizetesController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin", "boss"]), getKifizetes);
router.post("/", auth, authorize(["boss", "mainboss"]), createKifizetes);
router.delete("/:id", auth, authorize(["mainboss"]), deleteKifizetes);

export default router;
