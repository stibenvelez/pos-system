import connection from "../../config/db.js";
import bcrypt from "bcrypt";

export const allUsers = async () => {
    try {
        const sql = `SELECT * FROM Users`;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};

export const FindUser = async (value) => {
    try {
        const sql = `SELECT * FROM Users WHERE user = '${value}'`;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};

export const validatePassword = async (user, passwordForm) => {
    try {
        const sql = `SELECT * FROM Users WHERE user = '${user}'`;
        const [User] =  await connection.query(sql);
        return await bcrypt.compare(passwordForm, User[0].password);
    } catch (error) {}
};

export const insertNewUser = async ({
    user,
    password,
    email,
    firstName,
    lastName,
    idRoll,
    token,
}) => {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    try {
        const sql = `INSERT INTO Users
                        (user,
                        password,
                        email,
                        firstName,
                        lastName,
                        idRoll,
                        token)
                    VALUES ('${user}', '${password}', '${email}', '${firstName}', '${lastName}', ${idRoll}, '${token}')    
                    `;

        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};
