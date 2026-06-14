import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ChatBotToggle from '../chat/ChatBotToggle';





const Layout = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 mt-16 p-6">
          {children}
        </main>
      </div>
      <ChatBotToggle />
    </div>);

};

export default Layout;