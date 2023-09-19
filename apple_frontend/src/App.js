import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Apple from './components/Apple';
import { Routes } from 'react-router-dom';
import AppRoutes from './routes/Routes';


function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Login/> */}
     {/* <Apple/> */}
    <AppRoutes/>
    </div>
  );
}

export default App;
