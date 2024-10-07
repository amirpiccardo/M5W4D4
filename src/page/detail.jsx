import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams } from 'react-router-dom';
import { books } from "../components/AllTheBooks/AllTheBooks";
import { useEffect, useState } from "react";
import SingleBook from "../components/SingleBook/SingleBook";
import CommentArea from "../components/CommentArea/CommentArea";
import { Row } from "react-bootstrap";

const Detail = () => {

    const {id} = useParams();
    const filter = books.filter(book => book.id === Number(id));
    const [book, _] = useState(filter ? filter[0] : null);

return <>
          <CustomNavbar />
          <div className="container my-4">
            <Row>
                <div className="col-12 col-md-6">
                    <SingleBook book={book}/>
                </div>
                <div className="col-12 col-md-6">
                    <CommentArea book={book} />
                </div>
            </Row>
        </div>
      <Footer />
</>
}




export default Detail;