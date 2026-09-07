import { db } from "../config.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    const { email, jelszo } = req.body;

    try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if (result.rows.length === 0)
            return res.status(400).json({ uzenet: "Nincs ilyen felhasználó" });

        const user = result.rows[0];

        const egyezik = await bcrypt.compare(jelszo, user.password_hash);
        if (!egyezik) return res.status(400).json({ uzenet: "Hibás jelszó" });

        const token = jwt.sign(
            { id: user.id, szerep: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            uzenet: "Sikeres bejelentkezés",
            token,
            felhasznalo: {
                id: user.id,
                nev: user.name,
                szerep: user.role
            }
        });

    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
