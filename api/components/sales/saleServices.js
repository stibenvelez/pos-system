import connection from "../../config/db.js";

export const allSales = async () => {
    try {
        return await connection.query("SELECT * FROM Sales");
    } catch (error) {
        throw error;
    }
};
