import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = () => {
  const data = [
    { id: 1, name: 'Project A', status: 'Completed' },
    { id: 2, name: 'Project B', status: 'Ongoing' },
    { id: 3, name: 'Project C', status: 'Pending' }
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Project Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project) => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
