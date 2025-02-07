import { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import Table from "../table/Table";

const PurchaseOrder = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({
        paymentMode: '',
        collectionBy: '',
        amount: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="shadow-md border rounded dark:bg-gray-700/50 dark:text-white dark:border-gray-600">
                                    <div className="bg-blue-600 text-white rounded py-2 text-center text-sm dark:bg-gray-600">
                                        Purchase Request
                                    </div>
                                    <div>
                                        <div className="py-2 px-2 text-end text-blue-600 dark:text-white">
                                            My Old Cr: 0.000CR
                                        </div>
                                        <div className="p-2">
                                            <form onSubmit={handleSubmit}>
                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="paymentMode" className="text-sm">Payment Mode</label>
                                                    <select
                                                        id="paymentMode"
                                                        value={formData.paymentMode}
                                                        onChange={handleChange}
                                                        className="border rounded py-1 px-2 text-sm dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                                        required
                                                    >
                                                        <option value="">Select Payment Mode</option>
                                                        <option value="cash">Cash</option>
                                                        <option value="bank">Bank Transfer</option>
                                                        <option value="card">Card Payment</option>
                                                        <option value="upi">UPI</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col gap-1 mt-2">
                                                    <label htmlFor="collectionBy" className="text-sm">Collection By</label>
                                                    <input
                                                        type="text"
                                                        id="collectionBy"
                                                        value={formData.collectionBy}
                                                        onChange={handleChange}
                                                        className="border rounded px-3 py-1 text-sm dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                                        placeholder="Enter collection person"
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1 mt-2">
                                                    <label htmlFor="amount" className="text-sm">Enter Amount</label>
                                                    <input
                                                        type="number"
                                                        id="amount"
                                                        value={formData.amount}
                                                        onChange={handleChange}
                                                        className="border rounded px-3 py-1 text-sm dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                                        placeholder="Enter amount"
                                                        min="0"
                                                        step="0.01"
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1 mt-2">
                                                    <label htmlFor="comments" className="text-sm">Comments</label>
                                                    <textarea
                                                        id="comments"
                                                        value={formData.comments}
                                                        onChange={handleChange}
                                                        className="border rounded px-3 py-1 text-sm dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                                        placeholder="Enter comments"
                                                        rows="3"
                                                    />
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <button type="submit" className="bg-blue-500 border-2 border-blue-500 text-white px-6 py-1 rounded hover:bg-white hover:text-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-300 ease-in-out">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow-md rounded p-3 dark:bg-gray-700/50 dark:text-white col-span-2">
                                    <div>
                                        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                                            <div className="flex flex-col gap-2">
                                                <input 
                                                    type="date" 
                                                    id="startDate" 
                                                    className="w-full border rounded-lg py-1 px-3 text-sm bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <input 
                                                    type="date" 
                                                    id="endDate" 
                                                    className="w-full border rounded-lg py-1 px-3 text-sm bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                                />
                                            </div>
                                            <div className="flex items-end">
                                                <button type="submit" className="bg-blue-500 border-2 border-blue-500 text-white px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-300 ease-in-out">
                                                    Search
                                                </button>
                                            </div>
                                            <div className="flex gap-2">
                                                <button type="button" className="bg-red-500 border-2 border-red-500 text-white px-4 py-1 rounded hover:bg-white hover:text-red-600 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-300 ease-in-out">
                                                    PDF
                                                </button>
                                                <button type="button" className="bg-green-500 border-2 border-green-500 text-white px-4 py-1 rounded hover:bg-white hover:text-green-600 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-300 ease-in-out">
                                                    Export
                                                </button>
                                            </div>
                                        </form>
                                        <hr className="my-4 border-gray-300 dark:border-gray-600" />
                                        <div>
                                            <Table />
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
}

export default PurchaseOrder;