import { useState } from "react";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";

const BankInfo = () => {
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
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-white">Bank Info</h2>
                            </div>
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Account Details</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 dark:text-gray-300">Account Number: <span className="font-medium">1234567890</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Account Type: <span className="font-medium">Savings</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Branch Code: <span className="font-medium">001</span></p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Bank Details</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 dark:text-gray-300">Bank Name: <span className="font-medium">Example Bank</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Swift Code: <span className="font-medium">EXBKUS33</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">IBAN: <span className="font-medium">US123456789</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Contact Information</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 dark:text-gray-300">Branch Address: <span className="font-medium">123 Banking Street</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Phone: <span className="font-medium">+1 234 567 890</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Email: <span className="font-medium">support@examplebank.com</span></p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Additional Information</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 dark:text-gray-300">Account Status: <span className="font-medium text-green-600 dark:text-green-400">Active</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Last Updated: <span className="font-medium">2024-01-20</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Currency: <span className="font-medium">USD</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BankInfo;