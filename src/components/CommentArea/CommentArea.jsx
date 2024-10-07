import React, { useEffect, useState } from 'react';
import {get_comments_by_books_id,delete_comment_by_id} from '../../service/comment';
import CommentList from '../CommentList/CommentList'; 
import AddComment from '../AddComment/AddComment'; 
import Spinner from 'react-bootstrap/Spinner';


const CommentArea = ({ book }) => {

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [errorDelete, setErrorDelete] = useState(null);

  const handleCommentDelete = async (id) => {
    setErrorDelete(null);
    const data = await delete_comment_by_id(id);
    if(data === null)
      setErrorDelete("E' avvenuto un errore durante l'eliminazione del commento");
    else {
      setLoading(true);
      const comments_by_service = await get_comments_by_books_id(book.id);
      if(comments_by_service === null)
        setError("E' avvenuto un errore")
      else 
        setComments(comments_by_service);
  
      setLoading(false);
    }
  }

  const refreshComment = async () => {
    setLoading(true);
    const comments_by_service = await get_comments_by_books_id(book.id);
    if(comments_by_service === null)
      setError("E' avvenuto un errore")
    else 
      setComments(comments_by_service);

    setLoading(false);
  }



  useEffect(() => {
    
    const get_comments = async () => {
      const comments_by_service = await get_comments_by_books_id(book.id);
      if(comments_by_service === null)
        setError("E' avvenuto un errore")
      else 
        setComments(comments_by_service);
  
      setLoading(false);
    }

    get_comments();
  }, [])

  return (
    <div className="comment-area">
      <h4>Commenti per {book.title}</h4>
      {errorDelete && <p style={{ color: 'red' }}>{errorDelete}</p>}
      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <CommentList comments={comments} onCommentDelete={handleCommentDelete} refreshComment={refreshComment} />
      )}
      <h5 className='mt-5'>Aggiungi un commento</h5>
      <AddComment bookId={book.id} onCommentAdded={refreshComment} />
    </div>
  );
};

export default CommentArea;
