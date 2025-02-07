import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

const Reports = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('basic');
    const [selectedReport, setSelectedReport] = useState('notifications');
    const location = useLocation();

    // Routes where only the Outlet should be shown
    const fullScreenRoutes = [
        "/reports/dispute-reports",
        "/reports/generate-token",
        "/reports/ledger",
        "/reports/login-info",
        "/reports/my-earn",
        "/reports/bank-info",
        "/reports/invoice",
        "/reports/day-book",
        "/reports/help",
    ];

    // If the current route is in the list, show only the Outlet
    if (fullScreenRoutes.includes(location.pathname)) {
        return <Outlet />;
    }

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/* Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className='grow'>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left Panel */}
                            <div className='shadow-lg p-3 rounded-lg bg-white dark:bg-slate-800'>
                                <div className='flex flex-col sm:flex-row justify-between gap-4 mb-6 text-sm lg:text-xs'>
                                    <button onClick={() => setActiveSection('basic')} className={`${activeSection === 'basic' ? 'bg-blue-600 text-white dark:bg-slate-700' : 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400'} border border-blue-600 dark:border-blue-400 text-center rounded p-1`}>Basic Info & Setting</button>
                                    <button onClick={() => setActiveSection('manage')} className={`${activeSection === 'manage' ? 'bg-blue-600 text-white dark:bg-slate-700' : 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400'} border border-blue-600 dark:border-blue-400 text-center rounded p-1`}>Manage Profile</button>
                                </div>
                                <div>
                                    {activeSection === 'basic' && (
                                        <div className='flex flex-col text-sm space-y-1'>
                                            <Link to="dispute-reports" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">Dispute Report</Link>
                                            <Link to="generate-token" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">Generate Token</Link>
                                            <Link to="ledger" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">Ledger</Link>
                                            <Link to="login-info" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">Login Info</Link>
                                            <Link to="my-earn" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">My Earn</Link>
                                            <Link to="bank-info" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">Bank Info</Link>
                                            <Link to="invoice" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">Invoice</Link>
                                            <Link to="day-book" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">Day Book</Link>
                                            <Link to="help" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200">Help</Link>
                                        </div>
                                    )}
                                    {activeSection === 'manage' && (
                                        <div className='flex flex-col space-y-4'>
                                            <Link to="edit-profile" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-200">Edit Profile</Link>
                                            <Link to="change-password" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-200">Change Password</Link>
                                            <Link to="privacy-settings" className="text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-200">Privacy Settings</Link>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Panel */}
                            <div className='md:col-span-2 shadow-lg py-2 p-3 rounded-lg bg-white dark:bg-slate-800'>
                                {/* Report Tabs */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 text-sm lg:text-xs'>
                                    <button onClick={() => setSelectedReport('notifications')} className={`${selectedReport === 'notifications' ? 'bg-blue-600 text-white dark:bg-slate-700' : 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400'} border border-blue-600 dark:border-blue-400 text-center rounded p-1`}>Notifications</button>
                                    <button onClick={() => setSelectedReport('alerts')} className={`${selectedReport === 'alerts' ? 'bg-blue-600 text-white dark:bg-slate-700' : 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400'} border border-blue-600 dark:border-blue-400 text-center rounded p-1`}>Alerts</button>
                                    <button onClick={() => setSelectedReport('activities')} className={`${selectedReport === 'activities' ? 'bg-blue-600 text-white dark:bg-slate-700' : 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400'} border border-blue-600 dark:border-blue-400 text-center rounded p-1`}>Activities</button>
                                </div>

                                {/* Report Content */}
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Reports;
