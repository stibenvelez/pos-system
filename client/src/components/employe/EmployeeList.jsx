import React from "react";
import Table from "../ui/Table";
import Row from "../ui/Table/Row";

const EmployeeList = ({ employees, setOptionsState }) => {
    const COLUMNS = [{ name: "Nombre" }, { name: "Acciones" }];

    const DATA = employees.map((employe) => ({
        name: employe.name,
        actions: (
            <div className="flex justify-center">
                <button
                    onClick={() => setOptionsState("viewEmploye")}
                    className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-l hover:bg-gray-600"
                >
                    Ver
                </button>
                <button className="items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 hover:bg-blue-800">
                    Editar
                </button>
                <button
                    className={`items-center px-2 py-1 text-white transition duration-200 ease-in-out bg-gray-400 rounded-r  ${
                        employe.idState === 1
                            ? "hover:bg-red-500"
                            : "hover:bg-green-600"
                    } hover:bg-red-500`}
                >
                    Desactivar
                </button>
            </div>
        ),
    }));

    return (
        <Table>
            <thead className="text-xs uppercase text-gray-50 bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-left">
                    {COLUMNS.map((column) => (
                        <th scope="col" className="px-6 py-3">
                            {column.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {DATA.map((employe) => (
                    <Row>
                        <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 capitalize dark:text-white whitespace-nowrap"
                        >
                            {employe.name}
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 capitalize dark:text-white whitespace-nowrap"
                        >
                            {employe.actions}
                        </th>
                    </Row>
                ))}
            </tbody>
        </Table>
    );
};

export default EmployeeList;
