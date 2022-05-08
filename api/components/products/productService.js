import connection from "../../config/db.js";

export const allProducts = async () => {
    try {
        return await connection.query("SELECT * FROM Products");
    } catch (error) {
        throw error;
    }
};

export const productById = async (id) => {
    try {
        return await connection.query(`SELECT * FROM Products WHERE idProduct = ${id}`);
    } catch (error) {
        throw error;
    }
};
