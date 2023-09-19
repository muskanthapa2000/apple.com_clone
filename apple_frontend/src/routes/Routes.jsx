import { Route, Routes } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Apple from '../components/Apple';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path= "/login" element = {<Login/>}></Route>
        <Route path= "/" element = {<Apple/>}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
