import connection from "../../config/db.js";

export const allProducts = async () => {
    try {
        const sql = `
        SELECT * 
        FROM Products AS p
        LEFT JOIN ProductCategory AS pc ON p.idProductCategory = pc.idProductCategory 
        `;
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};

export const productById = async (id) => {
    try {
        return await connection.query(
            `SELECT * FROM Products WHERE idProduct = ${id}`
        );
    } catch (error) {
        throw error;
    }
};

export const insertProduct = async ({
    product,
    idProductCategory,
    unitPrice,
    unitCost,
    commissionPercentage,
    commissionValue,
    brand,
}) => {
    try {
        return await connection.query(
            `INSERT INTO Products
            (    
            product,
            idProductCategory,
            unitPrice,
            unitCost,
            commissionPercentage,
            brand
            )
        VALUES 
        (
            '${product}',
            ${idProductCategory}, 
            ${unitPrice},
            ${unitCost},
            ${commissionPercentage},
            '${brand}')`
        );
    } catch (error) {
        throw error;
    }
};

export const editProduct = async ({
    idProduct,
    product,
    idProductCategory,
    unitPrice,
    unitCost,
    commissionPercentage,
    commissionValue,
    brand,
    observations,
}) => {
    const sql = `UPDATE Products 
                    SET product='${product}',
                    idProductCategory =${idProductCategory},
                    unitPrice=${unitPrice},
                    unitCost=${unitCost},
                    commissionPercentage=${commissionPercentage},
                    commissionValue=${commissionValue},
                    brand='${brand}',
                    observations='${observations}'
                    
                WHERE idProduct = ${idProduct}`;
    try {
        return await connection.query(sql);
    } catch (error) {
        throw error;
    }
};
