import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getLogs,
    deleteLog
} from "../controllers/logsController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin"]), getLogs);
router.delete("/:id", auth, authorize(["mainboss"]), deleteLog);

export default router;
