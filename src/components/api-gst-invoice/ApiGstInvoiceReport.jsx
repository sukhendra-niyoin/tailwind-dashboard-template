import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import Table from "../table/Table";

const ApiGstInvoiceReport = () => {
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
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                            <div className="flex justify-between items-center flex-col gap-2 md:flex-row">
                                <h2 className="text-xl font-bold text-blue-600 dark:text-white">API GST Invoice Report</h2>
                                <div className="flex justify-between items-center gap-4">
                                    <div className="text-blue-600 dark:text-white">
                                        Month: <span>January</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button type="button" className="bg-red-500 border-2 border-red-500 text-white px-4 py-1 rounded text-sm hover:bg-white hover:text-red-600 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-300 ease-in-out">
                                            PDF
                                        </button>
                                        <button type="button" className="bg-green-500 border-2 border-green-500 text-white px-4 text-sm py-1 rounded hover:bg-white hover:text-green-600 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-300 ease-in-out">
                                            Export
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4 border-gray-300 dark:border-gray-600" />
                            <div>
                                <Table />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ApiGstInvoiceReport;