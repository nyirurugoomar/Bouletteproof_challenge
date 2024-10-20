import React, { useState } from "react";
import useSWR from "swr";
import Chart from "./Chart";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "tailwindcss/tailwind.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const fetcher = (url) => fetch(url).then((res) => res.json());

function Table() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const { data: crmData, error } = useSWR(
    "https://api.mockaroo.com/api/a3508120?count=50&key=2e3ba090",
    fetcher
  );

  console.log("CRM Data:", crmData);

  const filteredData = Array.isArray(crmData)
    ? crmData
        .filter(
          (customer) =>
            (customer.name &&
              customer.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (customer.email &&
              customer.email.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  if (error) {
    return <p className="text-red-500">Failed to fetch Customer data</p>;
  }

  return (
    <div className="px-4 md:px-10 lg:px-20 mx-auto w-full md:w-[74%] absolute">
      <div className="container mx-auto">
        <div className="my-6">
          <Chart />
          <h2 className="text-xl font-semibold mb-4">Customer Data</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name or email"
            className="mb-4 p-2 border rounded w-full md:w-1/2 outline-none"
          />

          {!crmData ? (
            <p>Loading CRM data...</p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b">Id</th>
                      <th className="py-2 px-4 border-b">Name</th>
                      <th className="py-2 px-4 border-b">Email</th>
                      <th className="py-2 px-4 border-b">Signup Date</th>
                      <th className="py-2 px-4 border-b">Last Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((customer, index) => (
                      <tr key={customer.id} className="text-center">
                        <td className="py-2 px-4 border-b">{index + 1}.</td>
                        <td className="py-2 px-4 border-b">{customer.name}</td>
                        <td className="py-2 px-4 border-b">{customer.email}</td>
                        <td className="py-2 px-4 border-b">
                          {customer.signupDate}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {customer.lastActivity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className="p-2 bg-gray-600 text-white rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span>Page {page}</span>
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  disabled={page * itemsPerPage >= crmData.length}
                  className="p-2 bg-gray-600 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Table;
