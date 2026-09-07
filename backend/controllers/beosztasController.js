import { db } from "../config.js";

export const getBeosztas = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, futar_nev, datum, muszak FROM beosztas ORDER BY datum DESC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const createBeosztas = async (req, res) => {
    const { futar_nev, datum, muszak } = req.body;

    try {
        await db.query(
            "INSERT INTO beosztas (futar_nev, datum, muszak) VALUES ($1, $2, $3)",
            [futar_nev, datum, muszak]
        );

        res.json({ uzenet: "Beosztás rögzítve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const deleteBeosztas = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM beosztas WHERE id = $1", [id]);
        res.json({ uzenet: "Beosztás törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
