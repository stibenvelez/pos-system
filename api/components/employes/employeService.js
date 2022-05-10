import connection from '../../config/db.js' 

export const allEmployees = async () => {
    try {
        return await connection.execute('SELECT * FROM Employees')
    } catch (error) {
        throw error
    }
}

export const employeById = async id => {
    try {
        return await connection.execute(
            `SELECT * FROM Employees WHERE idEmploye = ${id}`
        );
    } catch (error) {
        throw error
    }
}
