import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

function App() {
  return (
    <>   
     <NavBar />  
     <ItemListContainer greetings="Bienvenidos"/>
  

    </>
  )
}

export default App
