import React from 'react';
import { Table } from 'react-bootstrap';
import "./TransactionList.css"

const TransactionList = ({ transactions }) => {
  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.description}</td>
            <td>{transaction.amount.toFixed(2)}</td>
            <td>{transaction.type}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionList;
