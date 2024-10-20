"use client";

import { Line } from 'react-chartjs-2';
import useSWR from 'swr';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetcher = (url) => fetch(url).then((res) => res.json());

const Chart = () => {
  const { data, error } = useSWR('https://api.mockaroo.com/api/196c81b0?count=4&key=2e3ba090', fetcher);

  if (error) return <div className='text-red-500'>Failed fetch chart data</div>;
  if (!data) return <div>Loading...</div>;
  console.log("API Response:", data);
  if (!Array.isArray(data)) {
    return <div>Data format is invalid</div>;
  }
  const datasets = data.map((item) => ({
    label: item.label || "Unnamed",  
    data: Array(12).fill(item.data || 0),  
    backgroundColor: item.backgroundColor || 'rgba(75, 192, 192, 0.2)',  
    borderColor: item.borderColor || 'rgba(75, 192, 192, 1)',
    borderWidth: item.borderWidth || 1,
  }));

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: datasets, 
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Website Visitors</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
