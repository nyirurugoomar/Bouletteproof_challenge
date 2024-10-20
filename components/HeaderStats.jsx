"use client";
import React from "react";
import CardStats from "./CardStats";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HeaderStats() {
  const { data, error } = useSWR('https://api.mockaroo.com/api/196c81b0?count=4&key=2e3ba090', fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;
  console.log("API Response:", data);

  if (!Array.isArray(data)) {
    return <div>Data format is invalid</div>;
  }

  const totalVisitors = data.reduce((acc, curr) => acc + (curr.totalVisitors || 0), 0);
  const bounceRate = data.reduce((acc, curr) => acc + (curr.bounceRate || 0), 0);
  const pageViews = data.reduce((acc, curr) => acc + (curr.pageViews || 0), 0);
  const sessionDuration = data.reduce((acc, curr) => acc + (curr.avgSessionDuration || 0), 0);

  return (
    <>
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
          
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-6/12 lg:w-3/12 px-4 mb-6">
                <CardStats
                  statSubtitle="Total Visitors"
                  statTitle={totalVisitors.toString()}  
                  statArrow="up"
                  statPercentColor="text-emerald-500"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full sm:w-6/12 lg:w-3/12 px-4 mb-6">
                <CardStats
                  statSubtitle="Bounce Rate"
                  statTitle={bounceRate.toString()}  
                  statPercentColor="text-red-500"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full sm:w-6/12 lg:w-3/12 px-4 mb-6">
                <CardStats
                  statSubtitle="Page Views"
                  statTitle={pageViews.toString()}  
                  statPercentColor="text-orange-500"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full sm:w-6/12 lg:w-3/12 px-4 mb-6">
                <CardStats
                  statSubtitle="Average Session Duration"
                  statTitle={sessionDuration.toString()} 
                  statPercentColor="text-orange-500"
                  statIconColor="bg-pink-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
