// src/DataTableComponent.js

import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './Tablestyle.css';
import axios from "axios";

const DataTableComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/user/getusers`);
        setUsers(res.data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  // Define columns
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Username',
      selector: row => row.username,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Time',
      selector: row => row.time,
      sortable: true,
    },
  ];

  return (
    <div className='table'>
      <h1 className='table-head'>User Data Table</h1>
      <DataTable
        columns={columns}
        data={users}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default DataTableComponent;
