import connection from "../../config/db.js";

export const allSales = async (filters) => {
    const { dateFrom, dateTo, state } = filters;
    console.log(filters);
    try {
        const sql = `
        SELECT * 
        FROM Sales AS s 
        WHERE
        
        ${dateFrom ? `s.date >= '${dateFrom}'` : ""}
        ${dateTo ? ` AND s.date <= '${dateTo}'` : ""}
        ${state ? ` AND s.idStateSale = '${state}'` : ""}
        
        
        `;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};
export const insertNewSale = async ({ dataSale, detail }) => {
    try {
        await connection.query("START TRANSACTION");
        const totalSale = await detail.reduce(
            (acc, value) => acc + value.totalPrice,
            0
        );

        const sqlDataSale = `INSERT INTO 
            Sales (document, totalPrice) 
            VALUES(?, ?)`;

        const [rows] = await connection.query(sqlDataSale, [
            dataSale.document,
            totalSale,
        ]);

        const idSale = rows.insertId;
        const sqlDetailSail = `INSERT INTO 
            SaleDetail (idSale, idCategory, IdProduct, quantity, unitPrice, totalPrice, observations) 
            VALUES ? `;

        const arrayDetail = detail.map((detail) => [
            idSale,
            detail.category,
            detail.product,
            detail.quantity,
            detail.unitPrice,
            detail.totalPrice,
            detail.observatiosn,
        ]);

        await connection.query(sqlDetailSail, [arrayDetail]);
        const result = await connection.query(`COMMIT`);
        return result;
    } catch (error) {
        await connection.query("ROLLBACK");
        throw error;
    }
};
