import connection from "../../config/db.js";

export const allSales = async () => {
    try {
        return await connection.query("SELECT * FROM Sales");
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
        const result =await connection.query(`COMMIT`);
        return result;
    } catch (error) {
        await connection.query("ROLLBACK");
        throw error;
    }
};
