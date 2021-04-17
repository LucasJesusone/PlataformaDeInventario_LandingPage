import "./App.css";
import { LandingProvider } from "./Context/context";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Inventory from "./InventoryComponente/InventoryOpening";


import Nav from "./Navbar/Nav";
import OperationCreate from "./CreateComponente/OperationCreate";
import Reader from "./ReaderComponente/ReaderComponente";

function App() {
  return  (
    <LandingProvider classname="container" >
    <Nav/>
    <Header/>
    <Inventory/>
    <OperationCreate/>
    <Reader/>
  </LandingProvider>
)
}

export default App;
