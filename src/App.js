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
import ManageTools from './Pages/Dashboard/ManageTools';
import Payment from './Pages/Dashboard/Payment';
import FooterTop from './Pages/Home/FooterTop';
import Footer from './Pages/Home/Footer';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import Blogs from './Pages/Blogs/Blogs';

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
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }>
          </Route>
          <Route path='manageAllOrders' element={
            <RequireAdmin>
              <ManageAllOrders></ManageAllOrders>
            </RequireAdmin>
          }>
          </Route>
          <Route path='addTool' element={
            <RequireAdmin>
              <AddTools></AddTools>
            </RequireAdmin>
          }>
          </Route>
          <Route path='manageTools' element={
            <RequireAdmin>
              <ManageTools></ManageTools>
            </RequireAdmin>
          }>
          </Route>
        </Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <FooterTop></FooterTop>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
