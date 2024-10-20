"use client";
import React from "react";
import PropTypes from "prop-types";

function CardStats({ statSubtitle, statTitle, statIconColor }) {
  return (
    <div className="relative flex flex-col w-full md:w-64 h-32 bg-white rounded-lg shadow-lg mb-6 xl:mb-0">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
              {statSubtitle}
            </h5>
            <span className="font-semibold text-xl text-blueGray-700">
              {statTitle}
            </span>
          </div>
          <div className="relative w-auto pl-4 flex-initial">
            <div
              className={
                "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                statIconColor
              }
            >
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardStats.propTypes = {
  statSubtitle: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired,
  statIconColor: PropTypes.string.isRequired,
};

export default CardStats;
