import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {edit_comment_by_id} from "../../service/comment"
import { LiaEdit } from "react-icons/lia";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function EditComment({refreshComment, commentObj}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [comment, setComment] = useState(commentObj.comment);
  const [rate, setRate] = useState(commentObj.rate);


  const handleEdit = async () => {
    await edit_comment_by_id({rate, comment}, commentObj._id);
    refreshComment();
    handleClose();
  }

  return (
    <>
      <OverlayTrigger overlay={<Tooltip>Modifica</Tooltip>}>
      <Button variant="primary" onClick={handleShow}>
          <LiaEdit />
      </Button>
    </OverlayTrigger>

      <Modal show={show} onHide={handleClose}       aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Modifica commento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="comment">Commento</Form.Label>
        <Form.Control
            as="textarea"
            id="comment"
            aria-describedby="comment"
            value={comment}
            onChange={ev => setComment(ev.target.value)}
        />

<Form.Select aria-label="rate" value={rate} onChange={ev => setRate(ev.target.value)} className='mt-2 w-100 w-lg-50'>
{["1", "2", "3", "4", "5"].map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
    </Form.Select>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditComment;