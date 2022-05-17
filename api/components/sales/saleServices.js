import { insertNewSale } from "./saleDAL.js";

export const newSaleService = async (data) => {
    data.dataSale.totalGross = data.detail.reduce(
        (acc, num) => acc + num.totalPrice,
        0
    );

    data.dataSale.totalDiscount = data.detail.reduce(
        (acc, value) => acc + value.totalDiscount,
        0
    );

    data.dataSale.totalNet =
        data.dataSale.totalGross - data.dataSale.totalDiscount;

    data.dataSale.totalCommissionValue = data.detail.reduce(
        (acc, value) => acc + value.commissionValue,
        0
    );
    try {
        await insertNewSale(data);
    } catch (error) {
        throw error;
    }
};
