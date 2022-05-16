import connection from "../../config/db.js";

export const allDetailSales = async () => {
    try {
        const sql = `
        SELECT
            sd.idSaleDetail , 
            sd.idSale, 
            sd.idCategory, 
            sd.IdProduct, 
            sd.quantity, 
            sd.unitPrice,
            sd.totalPrice,
            sd.idEmploye    ,
            sd.commissionValue, 
            sd.commissionPercentage, 
            sd.observations, 
            sd.createdAt, 
            sd.updateAt,
            p.product,
            p.unitCost,
            e.name
        FROM SaleDetail AS sd 

        LEFT JOIN Products AS p ON sd.idProduct = p.idProduct
        LEFT JOIN Employees AS e ON sd.idEmploye= e.idEmploye

        ORDER BY sd.createdAt DESC
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
