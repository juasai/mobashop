//import logo from './logo.svg';
//import './App.css';
import "./styles/style.scss"
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";

function App() {
  return (
    <>
         <main>
         <Navbar />
         <Home welcomeMessage="¡Bienvenido a MiTienda!">
           {/* Aquí iran los productos */}
           <p>Próximamente: Catálogo de productos</p>
         </Home>

         </main>
    </>
  );
}

export default App;
