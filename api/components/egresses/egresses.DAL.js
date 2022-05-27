import connection from "../../config/db.js";

export const AllEgresses = async () => {
    try {
        const [result] = await connection.query("SELECT * FROM Egresses");
        return result;
    } catch (error) {
        throw error;
    }
};
export const AllEgressesCategories = async () => {
    try {
        const [result] = await connection.query(
            "SELECT * FROM EgresseCategory"
        );
        return result;
    } catch (error) {
        throw error;
    }
};

export const insertEgress = async (egress) => {
    try {
        const sql = `
            INSERT INTO Egresses (
                idSupplier,
                egressCategoryId,
                egressSubCategoryId,
                value,
                date,
                observations
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            )`
        const params = [
            egress.idSupplier,
            egress.egressCategoryId,
            egress.egressSubCategoryId,
            egress.value,
            egress.date,
            egress.observations
        ]
        return await connection.query(sql, params)
    } catch (error) {
        console.log(error)
        throw error;
    }
}