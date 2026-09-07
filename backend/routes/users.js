import express from "express";
import { auth, authorize } from "../middleware/authMiddleware.js";
import {
    getUsers,
    createUser,
    deleteUser
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/", auth, authorize(["mainboss", "admin"]), getUsers);
router.post("/", auth, authorize(["mainboss"]), createUser);
router.delete("/:id", auth, authorize(["mainboss"]), deleteUser);

export default router;
