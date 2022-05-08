import { allEmployees, employeById } from "./employeService.js";
export const getAllEmployees = async (req, res) => {
    try {
        const [rows] = await allEmployees();
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
};
export const getEmployeById = async (req, res) => {
    console.log(req.params.id);
    try {
        const [rows] = await employeById(req.params.id);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
};
