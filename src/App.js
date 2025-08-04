//import logo from './logo.svg';
//import './App.css';
import "./styles/style.scss"
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";

import { BrowserRouter } from "react-router-dom";

const basename = process.env.NODE_ENV === "production" ? "/mobashop" : "";


function App() {
  return (
    <>
         <BrowserRouter basename={basename}>
         <main>
         <Navbar />
             <Home welcomeMessage="¡Bienvenido a MiTienda!">
               {/* Aquí iran los productos */}
               <p>Próximamente: Catálogo de productos</p>
             </Home>

         </main>

         </BrowserRouter>
    </>
  );
}

export default App;
