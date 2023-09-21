import { Route, Routes } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Apple from '../components/Apple';
import Phone14 from '../components/phone/Phone14';
import Phone15 from '../components/phone/Phone15';
import Phone15PreOrder from '../components/phone/Phone15PreOrder';
import PhoneNavbar from '../components/PhoneNavbar';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/phonenavbar" element={<PhoneNavbar/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path= "/login" element = {<Login/>}></Route>
        <Route path= "/" element = {<Apple/>}></Route>
        <Route path= "/iphone14" element = {<Phone14/>}></Route>
        <Route path= "/iphone15" element = {<Phone15/>}></Route>
        <Route path= "/iphone15preorder" element = {<Phone15PreOrder/>}></Route>
        
      </Routes>
    </div>
  );
};

export default AppRoutes;
