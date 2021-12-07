import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />  
      <Outlet />
    </div>
  );
}

export default App;