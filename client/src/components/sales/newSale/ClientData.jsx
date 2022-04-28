import React from "react";


const ClientData = ({ sale, handleSale }) => {
    return (
        <div className="mt-3">
            <h3 className="text-gray-700 my-2  font-semibold">
                Datos del cliente
            </h3>

            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="documentType"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Documento
                    </label>
                    <div className="flex">
                        <select
                            id="documentType"
                            type="text"
                            name="documentType"
                            autoComplete="given-documentType"
                            className="border-l border-t border-b border-gray-200 bg-gray-100 rounded-l-md px-2 py-1"
                            onChange={handleSale}
                            value={sale.documentType}
                        >
                            <option value="1">CC</option>
                            <option value="2">NIT</option>
                            <option value="3">CE</option>
                            <option value="4">PPE</option>
                        </select>
                        <input
                            type="number"
                            name="document"
                            id="document"
                            autoComplete="given-document"
                            className="border border-gray-200 rounded-r-md px-2 py-1"
                            onChange={handleSale}
                            value={sale.document}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientData;
