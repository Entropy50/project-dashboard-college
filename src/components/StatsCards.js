import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const StatsCards = () => {
  const stats = [
    { title: 'Total Students', value: 1200 },
    { title: 'Courses Completed', value: 850 },
    { title: 'Ongoing Projects', value: 15 }
  ];

  return (
    <Row>
      {stats.map((stat, index) => (
        <Col md={4} key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{stat.title}</Card.Title>
              <Card.Text>{stat.value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatsCards;
