import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {
  return (
    <Link to={'/detail/' + book.id} style={{ textDecoration: 'none' }}>
      <Card 
        style={{ 
          width: '18rem', 
          border: 'none', 
          backgroundColor: '#dee0e8' 
        }} 
        className="mb-3"
      >
        <Card.Img 
          variant="top" 
          src={book.cover} 
          alt={book.title} 
          style={{ 
            width: '100%',   
            height: '150px', 
            objectFit: 'cover', 
            cursor: 'pointer' 
          }} 
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.author}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default SingleBook;
