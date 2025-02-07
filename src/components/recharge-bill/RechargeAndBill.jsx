import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import Table from "../table/Table";

const RechargeAndBill = () => {
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
                        {/* form section start */}
                        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4">
                            <form className="flex flex-wrap gap-4 items-end text-sm">
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

                                <div className="flex flex-col gap-1">
                                    <input type="text" id="consumer" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400" placeholder="Enter consumer number" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <input type="date" id="startDate" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <input type="date" id="endDate" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600" />
                                </div>

                                <button type="submit" className="bg-blue-500 border-2 border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                                    Search
                                </button>
                            </form>
                            <hr className="mt-4 border-gray-200 dark:border-slate-600" />
                            <div>

                                <Table />

                            </div>
                        </div>
                        {/* form section end */}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RechargeAndBill;