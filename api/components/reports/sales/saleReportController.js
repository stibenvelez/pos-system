import { allSalesReport } from "./salesReportDAL.js";
import {getSalesReportService} from "./saleServices.js";

export const getAllSalesReport = async (req, res) => {

    try {
        const result = await getSalesReportService(req.query);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
};
