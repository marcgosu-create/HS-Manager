import { db } from "../config.js";

export const getFutarok = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, nev, telefonszam, statusz FROM futarok ORDER BY nev ASC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: 'Adatbázis hiba' });
    }
};

export const createFutar = async (req, res) => {
    const { nev, telefonszam, statusz } = req.body;

    try {
        await db.query(
            "INSERT INTO futarok (nev, telefonszam, statusz) VALUES ($1, $2, $3)",
            [nev, telefonszam, statusz]
        );

        res.json({ uzenet: "Futár hozzáadva" });
    } catch (err) {
        res.status(500).json({ uzenet: 'Adatbázis hiba' });
    }
};

export const deleteFutar = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM futarok WHERE id = $1", [id]);
        res.json({ uzenet: "Futár törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: 'Adatbázis hiba' });
    }
};
