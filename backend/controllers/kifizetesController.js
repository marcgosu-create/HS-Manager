import { db } from "../config.js";

export const getKifizetes = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, futar_nev, datum, osszeg, megjegyzes FROM kifizetes ORDER BY datum DESC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const createKifizetes = async (req, res) => {
    const { futar_nev, datum, osszeg, megjegyzes } = req.body;

    try {
        await db.query(
            "INSERT INTO kifizetes (futar_nev, datum, osszeg, megjegyzes) VALUES ($1, $2, $3, $4)",
            [futar_nev, datum, osszeg, megjegyzes]
        );

        res.json({ uzenet: "Kifizetés rögzítve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const deleteKifizetes = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM kifizetes WHERE id = $1", [id]);
        res.json({ uzenet: "Kifizetés törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
