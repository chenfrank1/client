import './App.css';
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'url', headerName: 'Url', width: 600 },
  { field: 'created', headerName: 'Created', width: 300 }
]

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const intervalId = setInterval(() => { 

      fetch("/getpullrequestdata")
        .then((res) => res.json())
        .then((data) => setData(data));

  }, 5000)

  return () => clearInterval(intervalId);
  }, []);

  return (


      <Box sx={{ height: 300, width: '90%', padding: 15 }}>
      <h1> Data On Pull Requests:</h1>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={12}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
    
      </Box>
      
  );
}

export default App;
