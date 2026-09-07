import { db } from "../config.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
    try {
        const result = await db.query("SELECT id, name, email, role FROM users ORDER BY id ASC");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const createUser = async (req, res) => {
    const { name, email, jelszo, role } = req.body;

    try {
        const hash = await bcrypt.hash(jelszo, 10);

        await db.query(
            "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4)",
            [name, email, hash, role]
        );

        res.json({ uzenet: "Felhasználó létrehozva" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM users WHERE id = $1", [id]);
        res.json({ uzenet: "Felhasználó törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
