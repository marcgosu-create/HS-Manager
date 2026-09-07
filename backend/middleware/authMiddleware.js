import jwt from "jsonwebtoken";

export function auth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ uzenet: "Nincs token" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ uzenet: "Érvénytelen token" });
    }
}

export function authorize(roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.szerep)) {
            return res.status(403).json({ uzenet: "Nincs jogosultság" });
        }
        next();
    };
}
