import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, LogOut, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 transition-colors duration-300">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Career Advisor</h1>
          </div>

          <div className="flex items-center space-x-4">
            
            {/* Theme Toggle Switch */}
            <button
              onClick={() => {
                const html = document.documentElement;
                html.classList.toggle('dark');
              }}
              className="relative flex items-center w-14 h-7 bg-gray-300 dark:bg-indigo-500 rounded-full p-1 transition-colors duration-300 focus:outline-none"
              title="Toggle Dark Mode"
            >
              <div className="absolute left-1 flex items-center justify-center w-5 h-5 transition-transform duration-300 transform dark:translate-x-7 bg-white rounded-full shadow-md">
                <Sun className="w-3 h-3 text-yellow-500 dark:hidden" />
                <Moon className="w-3 h-3 text-indigo-500 hidden dark:block" />
              </div>
            </button>

            <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </button>

              {showProfile &&
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                  </div>
                  <Link 
                    to="/profile" 
                    onClick={() => setShowProfile(false)}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                  <button
                  onClick={logout}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
                  
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>);

};

export default Navbar;