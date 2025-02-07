import React from 'react';

function DashboardCard06() {
  const notifications = [
    {
      id: 1,
      title: "New order received",
      time: "2 min ago",
      status: "new"
    },
    {
      id: 2,
      title: "Payment confirmed",
      time: "10 min ago",
      status: "success"
    },
    {
      id: 3,
      title: "Customer support ticket",
      time: "1 hour ago",
      status: "pending"
    },
    {
      id: 4,
      title: "System update completed",
      time: "2 hours ago",
      status: "info"
    }
  ];

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Latest Notifications</h2>
      </header>
      <div className="p-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start p-2 border-b border-gray-100 dark:border-gray-700/60">
            <div className="w-full">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{notification.title}</span>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
              <div className="mt-1">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  notification.status === 'new' ? 'bg-blue-100 text-blue-800' :
                  notification.status === 'success' ? 'bg-green-100 text-green-800' :
                  notification.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {notification.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCard06;