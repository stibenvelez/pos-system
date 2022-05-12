import connection from "../../config/db.js";

export const allDetailSales = async () => {
    try {
        const sql = `
        SELECT *,
        p.product,
        e.name
        FROM SaleDetail AS s 

        LEFT JOIN Products AS p ON s.idProduct = p.idProduct
        LEFT JOIN Employees AS e ON s.idEmploye= e.idEmploye

        ORDER BY s.createdAt DESC
        `;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};

export const saleDetailByIdSale = async (idSale) => {
    try {
        const sql = `
        SELECT *
        FROM SaleDetail AS s 

        LEFT JOIN Products AS p ON s.idProduct = p.idProduct
        LEFT JOIN Employees AS e ON s.idEmploye= e.idEmploye
        WHERE idSale = ${idSale}
        `;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};
