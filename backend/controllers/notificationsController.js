import { db } from "../config.js";

export const getNotifications = async (req, res) => {
    try {
        const result = await db.query(
            "SELECT id, cim, uzenet, datum FROM notifications ORDER BY datum DESC"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ uzenet: 'Adatbázis hiba' });
    }
};

export const createNotification = async (req, res) => {
    const { cim, uzenet, datum } = req.body;

    try {
        await db.query(
            "INSERT INTO notifications (cim, uzenet, datum) VALUES ($1, $2, $3)",
            [cim, uzenet, datum]
        );

        res.json({ uzenet: "Értesítés létrehozva" });
    } catch (err) {
        res.status(500).json({ uzenet: 'Adatbázis hiba' });
    }
};

export const deleteNotification = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM notifications WHERE id = $1", [id]);
        res.json({ uzenet: "Értesítés törölve" });
    } catch (err) {
        res.status(500).json({ uzenet: 'Adatbázis hiba' });
    }
};
