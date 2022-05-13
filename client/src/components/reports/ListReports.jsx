import React from "react";
import { useSelector } from "react-redux";
import Card from "../ui/Card/Card";
import ItemReport from "./ItemReport";
import TableSkeleton from "./skeletons/TableSkeleton";

const ListReports = () => {
    const reports = useSelector(({ reports }) => reports.sales.results);
    const loading = useSelector(({ reports }) => reports.loading);
    if (loading) {
        return (
           <TableSkeleton/>
        );
    }

    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-slate-600 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Producto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cant
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Valor total
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Comision
                            </th>
                            <th scope="col" class="px-6 py-3">
                                fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports &&
                            reports.map((report) => (
                                <ItemReport
                                    report={report}
                                    key={report.idSaleDetail}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListReports;
