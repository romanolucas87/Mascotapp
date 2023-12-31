import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext';
import  Cart  from './components/Cart';
import SuccessMessage from './components/SuccessMessage';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element ={<><NavBar/> <ItemListContainer/><Footer/></>}/>
        <Route  path="/category/:id" element ={<><NavBar/> <ItemListContainer /> <Footer/></>}/>
        <Route path="/item/:id" element ={<><NavBar/> <ItemDetailContainer /> <Footer/></>}/>
        <Route path="/cart/" element ={<><NavBar/> <Cart/> <Footer/></>}/>
        <Route path="/cart/purchase/" element ={<><NavBar/> <SuccessMessage/> <Footer/></>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>        
  )
}

export default App
