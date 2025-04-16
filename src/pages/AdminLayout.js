// src/components/AdminLayout.jsx
import React, { useState } from 'react';
import Sidebar from '../admin/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`flex-1 p-4 bg-gray-50 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Content */}
        <button
          className="md:hidden absolute top-4 left-4 text-3xl z-50"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
