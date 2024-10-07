import CustomNavbar from "../components/Navbar/Navbar";
import Welcome from "../components/Welcome/Welcome";
import AllTheBooks, { books } from "../components/AllTheBooks/AllTheBooks";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Home = () => {

    const [searchTerm, setSearchTerm] = useState(''); 
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );


 return <>
          <CustomNavbar {...{searchTerm, setSearchTerm}}/>
      <Welcome />
      <AllTheBooks books={filteredBooks}/>
      <Footer />
 </>
}




export default Home;