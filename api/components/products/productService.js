import connection from "../../config/db.js";

export const allProducts = async () => {
    try {
        return await connection.query("SELECT * FROM Products");
    } catch (error) {
        throw error;
    }
};
