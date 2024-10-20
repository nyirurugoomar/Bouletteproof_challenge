"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import HeaderStats from "./HeaderStats";
import Table from "./Table";
import Login from "./Login";
import {useSession } from "next-auth/react";

function Dashboard() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <main className="overflow-hidden">
            <Sidebar />
            <div className=" md:ml-64 bg-gray-600 ">
              <Navbar />
              <HeaderStats />
              <Table />
            </div>
          </main>
        </>
      ) : (
        <div>
          <Login/>
        </div>
      )}
    </>
  );
}

export default Dashboard;
