import { allSalesReport } from "./salesReportDAL.js";


export const getSalesReportService = async (params) => {

    const [rows] = await allSalesReport(params);
    const totalSold = rows.reduce((acc, item) => acc + item.totalPrice, 0);
    const totalCommission = rows.reduce(
        (acc, item) => acc + item.commissionValue,
        0
    );
    const totalCost = rows.reduce(
        (acc, item) => acc + item.unitCost * item.quantity,
        0
    );

    const result = {
        totalCost,
        totalSold,
        totalCommission,
        count: rows.length,
        results: rows,
    };
    return result;
}