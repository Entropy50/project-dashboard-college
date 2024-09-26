import React from 'react';
import "./TotalBalance.css"

const TotalBalance = ({ transactions }) => {
  const total = transactions.reduce((acc, transaction) => {
    return transaction.type === 'Receita'
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);

  return (
    <div className="mb-4">
      <h2>Saldo Total: R$ {total.toFixed(2)}</h2>
    </div>
  );
};

export default TotalBalance;
