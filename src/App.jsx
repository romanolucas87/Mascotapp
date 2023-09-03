import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element ={<><NavBar/> <ItemListContainer/></>}/>
        <Route  path="/category/:id" element ={<><NavBar/> <ItemListContainer /></>}/>
        <Route path="/item/:id" element ={<><NavBar/> <ItemDetailContainer /></>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>        
  )
}

export default App
