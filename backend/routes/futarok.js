import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getFutarok,
    createFutar,
    deleteFutar
} from "../controllers/futarokController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin", "boss"]), getFutarok);
router.post("/", auth, authorize(["mainboss"]), createFutar);
router.delete("/:id", auth, authorize(["mainboss"]), deleteFutar);

export default router;
