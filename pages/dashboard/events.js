import React, { useState, useEffect } from "react";
import DataTableToolbar from "../../components/TTABLE/DataTableToolbar";
import DataTablePagination from "../../components/TTABLE/DataTablePagination";
import EventView from "../../components/View/EventView";

const filters = ["name", "venue"];

const initialColumns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
    show: true, // Initially, the column is visible
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    show: true, // Initially, the column is visible
  },
  {
    title: "Event Date",
    dataIndex: "eventDate",
    key: "eventDate",
    show: true, // Initially, the column is visible
  },
  {
    title: "Venue",
    dataIndex: "venue",
    key: "venue",
    show: true, // Initially, the column is visible
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",

    show: true, // Initially, the column is visible
  },
];

const data = [
  {
    _id: "1",
    name: "Event 1",
    venue: "Venue A",
  },
  {
    _id: "2",
    name: "Event 2",
    venue: "Venue B",
  },
  {
    _id: "3",
    name: "Event 3",
    venue: "Venue A",
  },
  {
    _id: "4",
    name: "Event 4",
    venue: "Venue C",
  },

  {
    _id: "5",
    name: "Event 5",
    venue: "Venue A",
  },
  {
    _id: "6",
    name: "Event 6",
    venue: "Venue C",
  },

  {
    _id: "7",
    name: "Event 7",
    venue: "Venue A",
  },
  {
    _id: "8",
    name: "Event 8",
    venue: "Venue C",
  },
  // ... more data ...
];

function DataTable() {
  const [columns, setColumns] = useState(initialColumns);
  const [filteredData, setFilteredData] = useState(data);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Implement any additional logic here for filtering and handling data
  }, []);

  const handleDataFiltered = (filteredData) => {
    // This function will receive the filtered data from the DataTableToolbar
    // You can implement additional logic here if needed
    setFilteredData(filteredData);
  };

  const handlePageChange = ({ page, size }) => {
    // Handle page change here and update currentPageData
    // You can implement pagination logic here if needed
  };

  const onChangeFilterHandler = ({ filter, value, reset }) => {
    setCurrentPage(1);
  };

  return (
    <div>
      <EventView />
    </div>
  );
}

export default DataTable;
