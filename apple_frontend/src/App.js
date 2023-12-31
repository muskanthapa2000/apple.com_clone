import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Apple from './components/Apple';
import { Routes } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import PhoneNavbar from './components/Navbar/PhoneNavbar';
import Phone14 from './components/phone/Phone14';
import Phone15 from './components/phone/Phone15';
import Phone15PreOrder from './components/phone/Phone15PreOrder';
import Phone144 from './components/phone/Phone14';
import Phone13 from './components/phone/Phone13';
import Phone11 from './components/phone/Phone11';
import Phone10 from './components/phone/Phone10';
import PhoneSe from './components/phone/PhoneSe';
import Airpods from './components/Airpods';
import Watch from './components/Watch';
import Payment from './components/Payment';
import MainNavbar from './components/Navbar/MainNavbar';
import Success from './components/Success';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <MainNavbar/>
    <AppRoutes/>
    <Footer/>
     {/* <Signup/> */}
     {/* <Login/> */}
     {/* <Apple/> */}
    {/* <AppRoutes/> */}
    {/* <PhoneNavbar/> */}
    {/* <Phone14/> */}
    {/* <Phone15/> */}
    {/* <Phone15PreOrder/> */}
    {/* <Phone13/> */}
   {/* <Phone11/> */}
   {/* <Phone10/> */}
   {/* <PhoneSe/> */}
   {/* <Airpods/> */}
   
{/* <Watch/> */}
{/* <Payment/> */}
{/* <Success/> */}
    </div>
  );
}

export default App;
