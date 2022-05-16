import connection from "../../../config/db.js";

export const allSalesReport = async (params) => {
    console.log(params);
    const filterByDate = () => {
        if (params.dateFrom === params.dateTo) {
            return `sd.createdAt like '%2022-05-08%'`;
        }

        if (params.dateFrom && params.dateTo) {
            console.log('no existe ')
            const from = params.dateFrom
                ? `sd.createdAt >= '${params.dateFrom}'`
                : "";
            const to = params.dateTo
                ? `AND sd.createdAt <= '${params.dateTo}'`
                : "";
            
                return from + " " + to;
        }


    };

    const filterbyCategory = () => {
        if (params.category) {
            return `AND sd.idCategory = '${params.category}'`;
        }
        return "";
    };
    const filterByEmplye = () => {
        if (params.employe) {
            return `AND sd.idEmploye = '${params.employe}'`;
        }
        return `AND sd.idEmploye like "%%"`;
    };
    try {
        const sql = `
        SELECT 
            sd.idSaleDetail, 
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
            e.name AS employeName
        FROM SaleDetail AS sd

        LEFT JOIN Products AS p ON sd.idProduct = p.idProduct
        LEFT JOIN Employees AS e ON sd.idEmploye= e.idEmploye
        WHERE
        ${filterByDate()}
        ${filterbyCategory()}
        ${filterByEmplye()}
        ORDER BY sd.createdAt DESC

        `;
        console.log(sql);
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};
