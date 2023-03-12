import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Menu from '../pages/Menu';
import Cart from "../pages/Cart/index";
import PaymentSuccess from '../pages/PaymentSuccess';


const Navigation = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/PaymentSuccess" element={<PaymentSuccess/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;