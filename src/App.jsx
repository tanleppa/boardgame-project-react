import Footer from "./components/Footer";
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import BookInfo from "./pages/BookInfo";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Books from "./pages/Books";
import { books } from './data'
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function removeFromCart(book) {
    setCart(cart.filter(item => {
      return +item.id !== +book.id
    }))
  }

  function changeQuantity(quantity, book) {
    setCart(cart.map(item => {
      if (+item.id === +book.id) {
        return {
          ...item,
          quantity: +quantity
        }
      }
      return item
    }))
  }

  return (
    <Router>
      <div className="App">
          <Nav cart={cart}/>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/books" element={<Books books={books}/>}/>
            <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
            <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart}/>} />
          </Routes>

          <Footer />
      </div>
    </Router>
  );
}

export default App;
