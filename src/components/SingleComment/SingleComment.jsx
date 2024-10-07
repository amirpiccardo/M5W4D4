import React from 'react';
import EditComment from '../editCommentModal/editComment';
import { Button } from 'react-bootstrap';
import { RiDeleteBin6Line } from "react-icons/ri";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { IoStar } from "react-icons/io5";

const SingleComment = ({ comment, onDelete, refreshComment }) => {
  const handleDelete = async () => {
    await onDelete(comment._id);
  };

  return (
    <div className="d-flex align-items-center my-2">
      <div className='d-flex flex-column'>
        <p className='m-0'>{comment.comment}</p>
        <div className='d-flex align-items-center'><IoStar className='me-2' /><p className='m-0 '>{comment.rate} </p></div>
      </div>
      <OverlayTrigger overlay={<Tooltip>Elimina</Tooltip>}>
        <Button variant="danger" className='ms-auto me-2' onClick={handleDelete}><RiDeleteBin6Line /></Button>
      </OverlayTrigger>
      <EditComment refreshComment={refreshComment} commentObj={comment} />
    </div>
  );
};

export default SingleComment;
