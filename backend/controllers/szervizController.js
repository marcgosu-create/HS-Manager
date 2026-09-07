import { db } from "../config.js";

export const getSzerviz = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, futar_nev, datum, hiba_leiras, koltseg, statusz FROM szerviz ORDER BY datum DESC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const createSzerviz = async (req, res) => {
    const { futar_nev, datum, hiba_leiras, koltseg, statusz } = req.body;

    try {
        await db.query(
            "INSERT INTO szerviz (futar_nev, datum, hiba_leiras, koltseg, statusz) VALUES ($1, $2, $3, $4, $5)",
            [futar_nev, datum, hiba_leiras, koltseg, statusz]
        );

        res.json({ uzenet: "Szerviz bejegyzés rögzítve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const deleteSzerviz = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM szerviz WHERE id = $1", [id]);
        res.json({ uzenet: "Szerviz bejegyzés törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
