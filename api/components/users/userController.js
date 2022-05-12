import {
    allUsers,
    FindUser,
    insertNewUser,
    validatePassword,
} from "./userServices.js";
import generarId from "../../helpers/generarId/generarId.js";
import generateJWT from "../../helpers/generateJWT/generatejwt.js";


export const getAllUsers = async (req, res) => {
    try {
        const [rows] = await allUsers();
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const createNewUser = async (req, res) => {
    //DOTO evit duplicate registers
    req.body.token = generarId();
    try {
        const [rows] = await insertNewUser(req.body);
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "hubo un error" });
    }
};

export const auth = async (req, res) => {
    const { user, password } = req.body;

    /// exist user
    const [User] = await FindUser(user);

    if (User.length===0) {
        const error = new Error("El usuario no existe");
        res.status(404).json({ msg: error.message });
        return
    }
    // comfirmed user
    if (!User[0].confirm) {
        const error = new Error("Tu cuenta no ha sido confirmada");
        res.status(403).json({ msg: error.message });
        return
    }

    // valid password
    if (!await validatePassword(user, password)) {
        const error = new Error("El password es incorrecto");
        res.status(403).json({ msg: error.message });
        return
    }

    res.json({
        idUser: User[0].idUser,
        fistName: User[0].user,
        lastName: User[0].lastName,
        email: User[0].email,
        idRoll: User[0].idRoll,
        token: generateJWT({idUser: User[0].idUser, user: User[0].user}),
    });

};

export const forgetPassword = async (req, res) => {
    const { user } = req.body;
    /// exist user
    const [User] = await FindUser(user);

    if (!User.length) {
        const error = new Error("El usuario no existe");
        res.status(404).json({ msg: error.message });
    }
    
    try {
        User[0].token = generarId()
        //TODO terminar funcionalidad
    } catch (error) {}
}


export const getUser = async (req, res) => {
    console.log(req);
    const { user } = req
    res.json(user)
};
