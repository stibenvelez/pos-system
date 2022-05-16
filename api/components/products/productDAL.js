import connection from "../../config/db.js";

export const allProducts = async ({ category, state }) => {
    const filterByCategory = () => {
        if (category) {
            return `p.idProductCategory LIKE '%${category}%'`;
        }
        return `p.idProductCategory LIKE '%%'`;
    };
    const filterByState = () => {
        if (state) {
            return `AND p.idState LIKE '%${state}%'`;
        }
        return `AND p.idState LIKE '%%'`;
    };

    try {
        const sql = `
        SELECT 
            p.idProduct,    
            p.product,
            p.idProductCategory,
            p.unitPrice,
            p.unitCost,
            p.commissionPercentage,
            p.commissionValue,
            p.idState,
            p.createAt,
            p.updateAt,
            p.observations,
            p.brand,
            pc.category,
            p.CreateAt
        FROM Products AS p
        LEFT JOIN ProductCategory AS pc ON p.idProductCategory = pc.idProductCategory
        WHERE
        ${filterByCategory()}
        ${filterByState()}

        ORDER BY p.idProductCategory
        `;
        console.log(sql);
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
