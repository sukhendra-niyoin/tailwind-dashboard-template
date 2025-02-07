import { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import Table from "../../table/Table";

const LoginInfo = () => {
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
                            <div className="mb-3 flex justify-between items-center flex-col gap-3 md:flex-row">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-white">Login Info</h2>
                                <div className="flex gap-2 mb-3">
                                    <button className="bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">Login History</button>
                                    <button className="bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">Login Failed History</button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                    <div>
                                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            id="startDate"
                                            className="w-full border text-sm rounded-lg py-1 px-3 text-gray-700 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            className="w-full border text-sm rounded-lg py-1 px-3 text-gray-700 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
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

export default LoginInfo;