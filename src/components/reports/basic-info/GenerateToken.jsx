import { useState } from "react";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";

const GenerateToken = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/* Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="grow ">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-white">Generate Token</h2>
                            </div>
                            <div className="mb-8">
                                <form className="space-y-4">
                                    <div className="flex items-center flex-col md:flex-row gap-1 md:gap-4">
                                        <div>
                                            <label htmlFor="ipAddress" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Enter IP Address</label>
                                            <input
                                                type="text"
                                                id="ipAddress"
                                                placeholder="Enter IP Address"
                                                className="w-full border rounded-lg py-1 px-3 text-sm text-gray-700 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <button type="submit" className="bg-blue-500 mt-2 text-sm md:mt-7 border-2 border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-6 py-1 rounded-lg hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                                                Generate Token
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Register IP Address</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Token No</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">10.5.2</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        value="Generated token here"
                                                        readOnly
                                                        className="flex-1 border rounded-lg py-1 px-3 text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                                    />
                                                    <button className="bg-blue-500 border-2 border-blue-500 text-white text-sm dark:bg-slate-700 dark:border-slate-600 px-6 py-1 rounded-lg hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                                                        Copy
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-red-600 border-2 border-red-600 text-sm text-white px-6 py-1 rounded-lg hover:text-red-600 hover:bg-white dark:text-white dark:hover:text-red-600 transition-colors duration-200">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GenerateToken;