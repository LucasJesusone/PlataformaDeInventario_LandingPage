import "./App.css";
import { LandingProvider } from "./Context/context";
import Header from "./Header/Header";



import Nav from "./Navbar/Nav";
import OperationCreate from "./CreateComponente/OperationCreate";
import Reader from "./ReaderComponente/ReaderComponente";

function App() {
  return  (
    <LandingProvider classname="container" >
    <Nav/>
    <Header/>
    <OperationCreate/>
    <Reader/>
  </LandingProvider>
)
}

export default App;
