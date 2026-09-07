import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./config.js";

dotenv.config();

import authRoutes from "./routes/auth.js";
import elszamolasRoutes from "./routes/elszamolas.js";
import szervizRoutes from "./routes/szerviz.js";
import beosztasRoutes from "./routes/beosztas.js";
import szabadsagRoutes from "./routes/szabadsag.js";
import kifizetesRoutes from "./routes/kifizetes.js";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);
app.use("/elszamolas", elszamolasRoutes);
app.use("/szerviz", szervizRoutes);
app.use("/beosztas", beosztasRoutes);
app.use("/szabadsag", szabadsagRoutes);
app.use("/kifizetes", kifizetesRoutes);
app.use("/users", usersRoutes);

// MYSQL TESZT
db.getConnection()
    .then(() => console.log("MySQL kapcsolat sikeresen létrejött"))
    .catch(err => console.error("MySQL hiba:", err));

// SERVER INDÍTÁS
app.listen(3000, () => {
    console.log("HS Manager backend fut a 3000-es porton");
});
