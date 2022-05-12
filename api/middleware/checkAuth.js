import { json } from "express";
import jwt from "jsonwebtoken";
import { FindUser } from "../components/users/userServices.js";

const checkAuth = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const [User] = await FindUser(decoded.user);

            req.user = User[0];

            delete req.user.password;
            delete req.user.token;
            delete req.user.createAt;
            delete req.user.updateAt;
            delete req.user.confirm;

            return next();
        } catch (error) {
            return res.status(404).json({ msg: "Error" });
        }
    }

    if (!token) {
        const error = new Error("Invalid Token");
        res.status(401).json({ msg: error.message });
    }
    next();
};

export default checkAuth;
