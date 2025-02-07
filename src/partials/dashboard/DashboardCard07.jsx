import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Recent Logins</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">User</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Login Time</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">IP Address</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Device</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                    <div className="text-gray-800 dark:text-gray-100">John Doe</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2 mins ago</div>
                </td>
                <td className="p-2">
                  <div className="text-center">192.168.1.1</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Chrome / Windows</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Success</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                    <div className="text-gray-800 dark:text-gray-100">Jane Smith</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">15 mins ago</div>
                </td>
                <td className="p-2">
                  <div className="text-center">192.168.1.2</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Safari / iOS</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Success</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                    <div className="text-gray-800 dark:text-gray-100">Mike Johnson</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">45 mins ago</div>
                </td>
                <td className="p-2">
                  <div className="text-center">192.168.1.3</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Firefox / Mac</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">Failed</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                    <div className="text-gray-800 dark:text-gray-100">Sarah Wilson</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1 hour ago</div>
                </td>
                <td className="p-2">
                  <div className="text-center">192.168.1.4</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Edge / Windows</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Success</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                    <div className="text-gray-800 dark:text-gray-100">Tom Brown</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2 hours ago</div>
                </td>
                <td className="p-2">
                  <div className="text-center">192.168.1.5</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Chrome / Android</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Success</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;