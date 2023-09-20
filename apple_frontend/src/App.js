import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Apple from './components/Apple';
import { Routes } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import PhoneNavbar from './components/PhoneNavbar';
import Phone14 from './components/Phone14';
import Phone15 from './components/Phone15';
import Phone15PreOrder from './components/Phone15PreOrder';


function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Login/> */}
     {/* <Apple/> */}
    <AppRoutes/>
    {/* <PhoneNavbar/> */}
    {/* <Phone14/> */}
    {/* <Phone15/> */}
    {/* <Phone15PreOrder/> */}
    </div>
  );
}

export default App;
