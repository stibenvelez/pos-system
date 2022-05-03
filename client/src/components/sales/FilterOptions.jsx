import React from "react";
import Card from "../../components/ui/Card/Card";

const FilterOptions = () => {
    return (
        <Card>
            <div className="flex gap-4 justify-between">
                <div className="flex gap-4">
                    <div>
                        <label htmlform="dateFrom">Fecha desde: </label>
                        <input
                            className="border py-2 px-2 rounded bg-gray-50"
                            type="date"
                            id="dateFrom"
                        />
                    </div>
                    <div>
                        <label htmlform="dateTo">Fecha hasta: </label>
                        <input
                            className="border py-2 px-2 rounded bg-gray-50"
                            type="date"
                            id="dateTo"
                        />
                    </div>
                    <div>
                        <label htmlform="category">Categoria: </label>
                        <select
                            className="border py-2 px-2 rounded bg-gray-50"
                            id="category"
                        >
                            <option vlaue="">-- todas --</option>
                            <option value="1">Sonido</option>
                            <option value="2">Lujo</option>
                            <option value="3">Polarizado</option>
                        </select>
                    </div>
                    <div>
                        <label htmlform="category">Estado: </label>
                        <select
                            className="border py-2 px-2 rounded bg-gray-50"
                            id="category"
                        >
                            <option value="1">Activa</option>
                            <option value="2">Anulada</option>
                        </select>
                    </div>
                </div>
                <div>
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">
                            Search
                        </label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=" Buscar"
                                required=""
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    );
};

export default FilterOptions;
