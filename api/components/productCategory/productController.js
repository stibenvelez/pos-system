import { allProductCategories } from "./productCategoryService.js"


export const getAllCategoryProducts = async (req, res) => {
    try {
        const [rows] = await allProductCategories()
        res.json(rows);
        
    } catch (error) {
        console.log(error)
    }
}