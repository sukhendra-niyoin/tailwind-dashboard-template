import { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import Table from "../../table/Table";

const Invoice = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/* Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <div className="mb-3">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-white">Invoice Report</h2>
                            </div>
                            <div className="mb-6">
                                <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <select id="status" className="border rounded py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600">
                                            <option value="">Select Status</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                            <option value="pending">Pending</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <select id="operator" className="border rounded py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600">
                                            <option value="">Select Operator</option>
                                            <option value="airtel">Airtel</option>
                                            <option value="jio">Jio</option>
                                            <option value="vodafone">Vodafone</option>
                                            <option value="bsnl">BSNL</option>
                                        </select>
                                    </div>
                                    <div className="flex items-end">
                                        <button type="submit" className="bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                                            Search
                                        </button>
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <button
                                            type="button"
                                            className="flex-1 bg-red-600 hover:bg-red-700 text-sm text-white font-medium py-1 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                        >
                                            PDF
                                        </button>
                                        <button
                                            type="button"
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-sm text-white font-medium py-1 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                        >
                                            Export
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex gap-2 flex-wrap my-7">
                                <button className="bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">Sell GST</button>
                                <button className="bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">Purchase GST</button>
                                <button className="bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">Upload GST</button>
                                <button className="bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">Sell Recharge GST</button>
                                <button className="bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">Upload Recharge GST</button>
                            </div>
                            <hr className="my-5 border-gray-300 dark:border-slate-600" />
                            <div className="overflow-x-auto">
                                <Table />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Invoice;