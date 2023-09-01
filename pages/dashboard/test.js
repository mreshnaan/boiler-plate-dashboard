// App.js
import React, { useState } from 'react';
import ColumnVisibilityMenu from '../../components/TTABLE/ColumnVisibilityMenu';
import DataTable from '../../components/TTABLE/DataTable';

// Sample data and columns
const data = [
  { _id: '1', name: 'Item 1', eventDate: '2023-08-26', venue: 'Venue A' },
  { _id: '2', name: 'Item 2', eventDate: '2023-08-27', venue: 'Venue B' },
];

const initialColumns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    show: true, // Initially, the column is visible
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    show: true, // Initially, the column is visible
  },
  {
    title: 'Event Date',
    dataIndex: 'eventDate',
    key: 'eventDate',
    show: true, // Initially, the column is visible
  },
  {
    title: 'Venue',
    dataIndex: 'venue',
    key: 'venue',
    show: true, // Initially, the column is visible
  },
];

function App() {
  const [columns, setColumns] = useState(initialColumns);

  return (
    <div>
      <ColumnVisibilityMenu columns={columns} setColumns={setColumns} />
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default App;



