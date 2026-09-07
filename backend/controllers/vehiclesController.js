import { db } from "../config.js";

export const getVehicles = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, tipus, rendszam, allapot FROM vehicles ORDER BY tipus ASC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const createVehicle = async (req, res) => {
    const { tipus, rendszam, allapot } = req.body;

    try {
        await db.query(
            "INSERT INTO vehicles (tipus, rendszam, allapot) VALUES ($1, $2, $3)",
            [tipus, rendszam, allapot]
        );

        res.json({ uzenet: "Jármű hozzáadva" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};

export const deleteVehicle = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM vehicles WHERE id = $1", [id]);
        res.json({ uzenet: "Jármű törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
