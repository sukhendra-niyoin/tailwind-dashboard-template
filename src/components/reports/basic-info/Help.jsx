import { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";

const Help = () => {
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
                                <h2 className="text-2xl font-bold text-blue-600 dark:text-white">Help</h2>
                            </div>
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Getting Started</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 dark:text-gray-300">• Navigate through the dashboard using the sidebar menu</p>
                                                <p className="text-gray-600 dark:text-gray-300">• View reports and analytics in their respective sections</p>
                                                <p className="text-gray-600 dark:text-gray-300">• Use the search function to find specific information</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Common Features</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 dark:text-gray-300">• Generate and export reports in various formats</p>
                                                <p className="text-gray-600 dark:text-gray-300">• Filter and sort data using available options</p>
                                                <p className="text-gray-600 dark:text-gray-300">• Save and bookmark frequently used reports</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Support Contact</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 dark:text-gray-300">Email: <span className="font-medium">support@example.com</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Phone: <span className="font-medium">1-800-HELP-NOW</span></p>
                                                <p className="text-gray-600 dark:text-gray-300">Hours: <span className="font-medium">24/7 Support Available</span></p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Troubleshooting</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 dark:text-gray-300">• Clear browser cache if experiencing issues</p>
                                                <p className="text-gray-600 dark:text-gray-300">• Check system requirements and compatibility</p>
                                                <p className="text-gray-600 dark:text-gray-300">• Refer to FAQ section for common problems</p>
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

export default Help;