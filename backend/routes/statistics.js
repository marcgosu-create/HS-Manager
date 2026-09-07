import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getStatistics
} from "../controllers/statisticsController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin"]), getStatistics);

export default router;
