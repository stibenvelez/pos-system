import connection from "../../config/db.js";

export const allSales = async (filters) => {
    const { dateFrom, dateTo, state } = filters;

    try {
        const sql = `
        SELECT * 
        FROM Sales AS s 
        WHERE 
        
        
        ${dateTo === dateFrom ? "s.date LIKE '%" + dateFrom + "%'" : ""}
        ${dateTo != dateFrom ? " s.date >= '" + dateFrom + "'" : ""}
        ${dateTo !== dateFrom ? "AND s.date <= '" + dateTo + "'" : ""}
        ${state ? "AND s.idStateSale = '" + state + "'" : ""}
        
        ORDER BY s.date DESC 
        `;
        console.log(sql);
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};


export const SaleById = async (id) => {
    try {
        const sql = `SELECT * FROM Sales WHERE id=${id}`;
        return await connection.query(sql);
    } catch (error) {
        console.log(sql);
        return await connection.query(sql);
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
            SaleDetail (
                idSale, 
                idCategory, 
                IdProduct, 
                quantity, 
                unitPrice, 
                totalPrice,
                idEmploye,
                commissionValue,
                commissionPercentage,
                observations
                ) 
            VALUES ? `;

        const arrayDetail = detail.map((detail) => [
            idSale,
            detail.category,
            detail.product,
            detail.quantity,
            detail.unitPrice,
            detail.totalPrice,
            detail.employe,
            detail.commissionValue,
            detail.commissionPercentage,
            detail.observatios,
        ]);
        console.log(arrayDetail);
        await connection.query(sqlDetailSail, [arrayDetail]);
        const result = await connection.query(`COMMIT`);
        return result;
    } catch (error) {
        await connection.query("ROLLBACK");
        throw error;
    }
};
