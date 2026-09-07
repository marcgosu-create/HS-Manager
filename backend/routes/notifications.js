import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getNotifications,
    createNotification,
    deleteNotification
} from "../controllers/notificationsController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin", "boss"]), getNotifications);
router.post("/", auth, authorize(["mainboss"]), createNotification);
router.delete("/:id", auth, authorize(["mainboss"]), deleteNotification);

export default router;
