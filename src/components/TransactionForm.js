import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import "./TransactionForm.css";

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Receita'); // Default to "Receita"
  const [error, setError] = useState(''); // Estado para mensagem de erro

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description || !amount || !type) {
      setError('Preencha todos os campos.');
      return;
    }
    
    if (parseFloat(amount) <= 0) {
      setError('O valor deve ser maior que 0.');
      return;
    }

    addTransaction({ description, amount: parseFloat(amount), type });
    setDescription('');
    setAmount('');
    setError(''); // Limpa o erro após a submissão bem-sucedida
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value >= 0) { // Verifica se o valor é positivo
      setAmount(value);
      setError('');
    } else {
      setError('O valor não pode ser negativo.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="description">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Salário, Aluguel"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="amount">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ex: 500"
              value={amount}
              onChange={handleAmountChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="type">
            <Form.Label>Tipo</Form.Label>
            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Receita">Receita</option>
              <option value="Despesa">Despesa</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe erro em vermelho */}

      <Button variant="primary" type="submit">
        Adicionar
      </Button>
    </Form>
  );
};

export default TransactionForm;
