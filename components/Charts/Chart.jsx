import React from "react";
// import ReactApexChart from "react-apexcharts";
//https://stackoverflow.com/questions/67784672/react-next-js-doesnt-seem-to-work-with-apexcharts
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function Chart({ data, options, type }) {
  return (
    <>
      <ReactApexChart
        options={options}
        series={data}
        type={type}
        width="100%"
        height="100%"
      />
    </>
  );
}

export default Chart;
