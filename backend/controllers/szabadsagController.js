import { db } from "../config.js";

export const getSzabadsag = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, futar_nev, datum_tol, datum_ig, tipus, megjegyzes FROM szabadsag ORDER BY datum_tol DESC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const createSzabadsag = async (req, res) => {
    const { futar_nev, datum_tol, datum_ig, tipus, megjegyzes } = req.body;

    try {
        await db.query(
            "INSERT INTO szabadsag (futar_nev, datum_tol, datum_ig, tipus, megjegyzes) VALUES ($1, $2, $3, $4, $5)",
            [futar_nev, datum_tol, datum_ig, tipus, megjegyzes]
        );

        res.json({ uzenet: "Szabadság rögzítve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const deleteSzabadsag = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM szabadsag WHERE id = $1", [id]);
        res.json({ uzenet: "Szabadság törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
