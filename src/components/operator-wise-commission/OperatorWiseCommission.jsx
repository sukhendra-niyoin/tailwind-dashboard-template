import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import Table from "../table/Table";

const OperatorWiseCommission = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <div className="mb-3">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-white">Operator Wise Commission Report</h2>
                            </div>
                            <div className="mb-6">
                                <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                    <div>
                                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Start Date</label>
                                        <input
                                            type="date"
                                            id="startDate"
                                            className="w-full border rounded-lg py-1 px-3 text-gray-700 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">End Date</label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            className="w-full border rounded-lg py-1 px-3 text-gray-700 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="flex items-end">
                                        <button 
                                            type="submit" 
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white "
                                        >
                                            Search
                                        </button>
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <button 
                                            type="button" 
                                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                        >
                                            PDF
                                        </button>
                                        <button 
                                            type="button" 
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                        >
                                            Export
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="overflow-x-auto">
                                <Table />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default OperatorWiseCommission;