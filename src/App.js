import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Login from './Pages/Authentication/Login';
import Signup from './Pages/Authentication/Signup';
import RequireAuth from './Pages/Authentication/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import AddTools from './Pages/Dashboard/AddTools';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tool/:toolId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}>
        </Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddAReview></AddAReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }>
          </Route>
          <Route path='addTool' element={
            <RequireAdmin>
              <AddTools></AddTools>
            </RequireAdmin>
          }>
          </Route>
        </Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
