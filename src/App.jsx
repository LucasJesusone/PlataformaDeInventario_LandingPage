import "./App.css";
import { LandingProvider } from "./Context/context";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Inventory from "./Inventory_Opening/InventoryOpening";

import Main from "./Main/Main";
import Nav from "./Navbar/Nav";

function App() {
  return  (
    <LandingProvider classname="container" >
    <Nav />
    <Header />
    <Main />
    <Inventory />
    <Footer />
  </LandingProvider>
)
}

export default App;
