import { Link } from "react-router-dom";
import { FaBook, FaKey, FaFileInvoice, FaPiggyBank, FaInfoCircle, FaClipboardList, FaUserLock, FaCoins, FaLifeRing } from "react-icons/fa";

const UpperNav = () => {
    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
            <div className="px-5 py-4">
                <div className='flex flex-row flex-wrap gap-2 lg:justify-between'>
                    <Link to="dispute-reports" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaClipboardList /> Dispute Report
                    </Link>
                    <Link to="generate-token" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaKey /> Generate Token
                    </Link>
                    <Link to="ledger" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaBook /> Ledger
                    </Link>
                    <Link to="login-info" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaUserLock /> Login Info
                    </Link>
                    <Link to="my-earn" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaCoins /> My Earn
                    </Link>
                    <Link to="bank-info" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaPiggyBank /> Bank Info
                    </Link>
                    <Link to="invoice" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaFileInvoice /> Invoice
                    </Link>
                    <Link to="day-book" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaBook /> Day Book
                    </Link>
                    <Link to="help" className="flex items-center gap-2 bg-blue-500 border-2 text-sm border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        <FaLifeRing /> Help
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UpperNav;