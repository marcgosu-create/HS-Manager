import { db } from "../config.js";

export const getElszamolas = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, futar_nev, datum, osszeg, megjegyzes FROM elszamolas ORDER BY datum DESC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const createElszamolas = async (req, res) => {
    const { futar_nev, datum, osszeg, megjegyzes } = req.body;

    try {
        await db.query(
            "INSERT INTO elszamolas (futar_nev, datum, osszeg, megjegyzes) VALUES ($1, $2, $3, $4)",
            [futar_nev, datum, osszeg, megjegyzes]
        );

        res.json({ uzenet: "Elszámolás rögzítve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const deleteElszamolas = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM elszamolas WHERE id = $1", [id]);
        res.json({ uzenet: "Elszámolás törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
