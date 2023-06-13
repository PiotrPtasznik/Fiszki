import AppNavbar from "../components/Navbar/AppNavbar";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <AppNavbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;