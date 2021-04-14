import "./App.css";
import { LandingProvider } from "./Context/context";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Inventory from "./Inventory_Opening/InventoryOpening";


import Nav from "./Navbar/Nav";
import OperationCreate from "./OperationCreate/OperationCreate";

function App() {
  return  (
    <LandingProvider classname="container" >
    <Nav />
    <Header />
    <Inventory />
    <OperationCreate />
    <Footer />
  </LandingProvider>
)
}

export default App;
