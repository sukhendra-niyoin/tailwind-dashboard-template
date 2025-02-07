import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import Table from "../table/Table";

const FinancialStatus = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className='grow'>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg mb-8">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                {/* <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Financial Status</h2> */}
                                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="status" className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                                        <select id="status" className="w-full border rounded-lg py-1 px-3 text-sm bg-white dark:bg-gray-700 dark:text-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="">Select Status</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                            <option value="pending">Pending</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="operator" className="text-sm font-medium text-gray-700 dark:text-gray-300">Operator</label>
                                        <select id="operator" className="w-full border rounded-lg py-1 px-3 text-sm bg-white dark:bg-gray-700 dark:text-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="">Select Operator</option>
                                            <option value="airtel">Airtel</option>
                                            <option value="jio">Jio</option>
                                            <option value="vodafone">Vodafone</option>
                                            <option value="bsnl">BSNL</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="startDate" className="text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
                                        <input type="date" id="startDate" className="w-full border rounded-lg py-1 px-3 text-sm bg-white dark:bg-gray-700 dark:text-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="endDate" className="text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
                                        <input type="date" id="endDate" className="w-full border rounded-lg py-1 px-3 text-sm bg-white dark:bg-gray-700 dark:text-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                    </div>

                                    <div className="flex items-end">
                                        <button type="submit" className="bg-blue-500 border-2 border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="p-6">
                                <Table />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default FinancialStatus;