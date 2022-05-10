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
        return await connection.query(
            `SELECT * FROM Products WHERE idProduct = ${id}`
        );
    } catch (error) {
        throw error;
    }
};

export const insertProduct = async ({
    product,
    category,
    unitPrice,
    unitCost,
    commissionPercentage,
    commissionValue,
    brand,
}) => {
   console.log(
       product,
       category,
       unitPrice,
       unitCost,
       commissionPercentage,
       commissionValue,
       brand
   );
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
            ${category}, 
            ${unitPrice},
            ${unitCost},
            ${commissionPercentage},
            '${brand}')`
        );
    } catch (error) {
        throw error;
    }
};
