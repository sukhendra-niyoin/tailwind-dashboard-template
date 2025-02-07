import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import { useState } from "react";

const ManageProfile = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showPasswordReset, setShowPasswordReset] = useState(false);

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
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-600 dark:text-white">Profile Information</h2>
                  <div className="space-x-4">
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      {isEditing ? 'Save Changes' : 'Edit Profile'}
                    </button>
                    <button
                      onClick={() => setShowPasswordReset(!showPasswordReset)}
                      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      Reset Password
                    </button>
                  </div>
                </div>

                {showPasswordReset && (
                  <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Reset Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Current Password</label>
                        <input type="password" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">New Password</label>
                        <input type="password" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                        <input type="password" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                      </div>
                      <button className="bg-blue-500 border-2 border-blue-500 text-white dark:bg-slate-700 dark:border-slate-600 px-4 py-1 rounded hover:bg-white hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition-all duration-300 ease-in-out">
                        Update Password
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Personal Information</h3>
                      <div className="space-y-2">
                        {isEditing ? (
                          <>
                            <div>
                              <label className="block text-sm font-medium mb-1">Full Name</label>
                              <input type="text" defaultValue="John Doe" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Email</label>
                              <input type="email" defaultValue="john@example.com" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Phone</label>
                              <input type="tel" defaultValue="+1 234 567 890" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-600 dark:text-gray-300">Full Name: <span className="font-medium">John Doe</span></p>
                            <p className="text-gray-600 dark:text-gray-300">Email: <span className="font-medium">john@example.com</span></p>
                            <p className="text-gray-600 dark:text-gray-300">Phone: <span className="font-medium">+1 234 567 890</span></p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Address Information</h3>
                      <div className="space-y-2">
                        {isEditing ? (
                          <>
                            <div>
                              <label className="block text-sm font-medium mb-1">Street Address</label>
                              <input type="text" defaultValue="123 Main St" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">City</label>
                              <input type="text" defaultValue="New York" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Country</label>
                              <input type="text" defaultValue="USA" className="border rounded px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 placeholder:text-gray-500 dark:placeholder:text-slate-400 w-full" />
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-600 dark:text-gray-300">Street: <span className="font-medium">123 Main St</span></p>
                            <p className="text-gray-600 dark:text-gray-300">City: <span className="font-medium">New York</span></p>
                            <p className="text-gray-600 dark:text-gray-300">Country: <span className="font-medium">USA</span></p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Account Settings</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600 dark:text-gray-300">Account Status: <span className="font-medium text-green-600 dark:text-green-400">Active</span></p>
                        <p className="text-gray-600 dark:text-gray-300">Member Since: <span className="font-medium">2023-01-01</span></p>
                        <p className="text-gray-600 dark:text-gray-300">Last Login: <span className="font-medium">2024-01-20</span></p>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Preferences</h3>
                      <div className="space-y-2">
                        {isEditing ? (
                          <>
                            <div className="flex items-center">
                              <input type="checkbox" id="emailNotif" className="mr-2" />
                              <label htmlFor="emailNotif">Email Notifications</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="smsNotif" className="mr-2" />
                              <label htmlFor="smsNotif">SMS Notifications</label>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Language</label>
                              <select className="border rounded py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-300 border-gray-300 dark:border-slate-600 w-full">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                              </select>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-600 dark:text-gray-300">Email Notifications: <span className="font-medium">Enabled</span></p>
                            <p className="text-gray-600 dark:text-gray-300">SMS Notifications: <span className="font-medium">Disabled</span></p>
                            <p className="text-gray-600 dark:text-gray-300">Language: <span className="font-medium">English</span></p>
                          </>
                        )}
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

export default ManageProfile;