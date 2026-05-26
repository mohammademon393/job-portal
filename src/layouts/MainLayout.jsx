import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
      <div className = "bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <Navbar></Navbar>
          <div>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MainLayout;