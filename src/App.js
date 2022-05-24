import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/tool/:toolId' element={<Purchase></Purchase>}></Route>
       <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
