import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getVehicles,
    createVehicle,
    deleteVehicle
} from "../controllers/vehiclesController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin", "boss"]), getVehicles);
router.post("/", auth, authorize(["mainboss"]), createVehicle);
router.delete("/:id", auth, authorize(["mainboss"]), deleteVehicle);

export default router;
