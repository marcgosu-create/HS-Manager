import { db } from "../config.js";

export const getLogs = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, user_nev, muvelet, datum FROM logs ORDER BY datum DESC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const deleteLog = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM logs WHERE id = $1", [id]);
        res.json({ uzenet: "Log törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
