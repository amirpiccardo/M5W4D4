import React, { useEffect, useRef, useState } from 'react';
import {create_comment} from "../../service/comment"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { IoStar } from "react-icons/io5";

const AddComment = ({ bookId, onCommentAdded }) => {

  const [comment, setComment] = useState('');
  const [rate, setRate] = useState('1');

  const [validation, setValidation] = useState(null);

  useEffect(() => {
    setValidation(null);
    if(comment.length < 5) 
      setValidation('Inserire almeno 5 caratteri nel commento')
  }, [comment])

  const reset_comment = () => {
    setComment('');
    setRate("1")
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const comment_object = {
      rate: rate,
      comment: comment,
      elementId: bookId
    }
console.log(comment_object)
    await create_comment(comment_object);
    onCommentAdded();
    reset_comment();

  }

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <div className='col-12 col-md-6'>
        <Form.Label>Contenuto</Form.Label>
        <Form.Control
            as="textarea"
            id="comment"
            aria-describedby="comment"
            value={comment}
            onChange={ev => setComment(ev.target.value)}
        />
      {validation && <p style={{ color: 'red' }}>{validation}</p>}
        </div>

        <div className='col-12 col-md-6'>
        <Form.Label className='d-flex align-items-center'>Stelle <IoStar className='ms-2' /></Form.Label>
        <Form.Select aria-label="rate" value={rate} onChange={ev => setRate(ev.target.value)} className='mt-2 mb-4 w-100 w-lg-50'>
{["1", "2", "3", "4", "5"].map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
    </Form.Select>
</div>
      </Row>
      <Button variant="primary" type="submit" disabled={validation !== null}>Aggiungi Commento</Button>
    </form>
  );
};

export default AddComment;
