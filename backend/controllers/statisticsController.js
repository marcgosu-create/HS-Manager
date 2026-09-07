import { db } from "../config.js";

export const getStatistics = async (req, res) => {
    try {
        const futarCount = await db.query("SELECT COUNT(*) FROM futarok");
        const beosztasCount = await db.query("SELECT COUNT(*) FROM beosztas");
        const szabadsagCount = await db.query("SELECT COUNT(*) FROM szabadsag");
        const szervizCount = await db.query("SELECT COUNT(*) FROM szerviz");
        const elszamolasCount = await db.query("SELECT COUNT(*) FROM elszamolas");
        const kifizetesCount = await db.query("SELECT COUNT(*) FROM kifizetes");

        res.json({
            futarok: futarCount.rows[0].count,
            beosztas: beosztasCount.rows[0].count,
            szabadsag: szabadsagCount.rows[0].count,
            szerviz: szervizCount.rows[0].count,
            elszamolas: elszamolasCount.rows[0].count,
            kifizetes: kifizetesCount.rows[0].count
        });
    } catch (err) {
        res.status(500).json({ uzenet: "Adatbázis hiba" });
    }
};
