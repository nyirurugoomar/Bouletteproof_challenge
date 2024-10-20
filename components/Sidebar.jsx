"use client";
import { signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import {
  RiDashboardLine,
  RiMegaphoneLine,
  RiTeamLine,
  RiGlobalLine,
  RiHeadphoneLine,
  RiSettings3Line,
  RiLogoutBoxLine,
  RiMenuLine,
} from "react-icons/ri";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false); 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Hamburger Menu Button for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden text-white"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <RiMenuLine size={30} />
      </button>

      {/* Sidebar Container */}
      <nav
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-[#0F233A] transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0  md:flex md:flex-col`}
      >
        {/* Logo */}
        <div className="text-white text-2xl font-bold mb-6 px-6 py-4">
          bouletteproof.
        </div>

        {/* Sidebar Links - Integrated directly into the main component */}
        <div className="flex flex-col h-full justify-start">
          <ul className="flex flex-col px-6 py-4 list-none">
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-teal-300 text-sm py-3 font-bold"
              >
                <RiDashboardLine size={20} className="mr-2" />
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-teal-300 text-sm py-3 font-bold"
              >
                <RiMegaphoneLine size={20} className="mr-2" />
                Campaigns
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-teal-300 text-sm py-3 font-bold"
              >
                <RiTeamLine size={20} className="mr-2" />
                Leads
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-teal-300 text-sm py-3 font-bold"
              >
                <RiGlobalLine size={20} className="mr-2" />
                Website Analytics
              </a>
            </li>
          </ul>

          <div className="mt-auto px-6">
            <hr className="my-4" />
            <ul className="flex flex-col list-none">
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-white hover:text-teal-300 text-sm py-3 font-bold"
                >
                  <RiHeadphoneLine size={20} className="mr-2" />
                  Support
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-white hover:text-teal-300 text-sm py-3 font-bold"
                >
                  <RiSettings3Line size={20} className="mr-2" />
                  Settings
                </a>
              </li>
              <li onClick={() => signOut()} className="mb-4">
                <a
                  href="#"
                  className="flex items-center text-white hover:text-teal-300 text-sm py-3 font-bold"
                >
                  <RiLogoutBoxLine size={20} className="mr-2" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)} 
        ></div>
      )}
    </>
  );
}

export default Sidebar;
