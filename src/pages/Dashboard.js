import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import TotalBalance from '../components/TotalBalance';
import './Dashboard.css';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };


  return (
    <div className="container">    
    <div className='div2'>  
      <h1>Dashboard</h1>
      <TransactionForm addTransaction={addTransaction} />
      </div>
      <div className="tab">
        <TransactionList transactions={transactions} />
        <TotalBalance transactions={transactions} />
      </div>
    </div>

  );
};

export default Dashboard;
