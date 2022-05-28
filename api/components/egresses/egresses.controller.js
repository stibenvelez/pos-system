import {
    addNewEgressService,
    getAllEgressesService,
    getAllEgressesCategoriesService,
    getAllEgressesSubCategoriesService,
} from "./egresses.services.js";


export const getAllEgresses = async (req, res) => {
    try {
        const result = await getAllEgressesService();
        res.json(result)
    } catch (error) {
        res.status(500).json({msg:"Error al obtener los egresos"});
    }
}
export const getAllEgressesCategories = async (req, res) => {
    try {
        const result = await getAllEgressesCategoriesService();
        res.json(result);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener los egresos" });
    }
};
export const getAllEgressesSubcategories = async (req, res) => {
    try {
        const result = await getAllEgressesSubCategoriesService();
        res.json(result);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener los egresos" });
    }
};

export const addNewEgress = async (req, res) => {
    try {
        await addNewEgressService(req.body);
        res.status(200).json({msg:"Egreso agregado correctamente"});
    } catch (error) {
        res.status(500).json({msg:"Error al agregar el egreso"});
    }
}