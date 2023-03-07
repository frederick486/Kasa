import React from 'react';
import {
  createBrowserRouter,
  Outlet
} from "react-router-dom";
import Homepage from '../pages/homepage/Homepage.jsx'
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../layout/footer/Footer.jsx';
import Main from '../layout/main/Main.jsx';
import Apartmentpage from '../pages/apartmentpage/Apartmentpage.jsx';
import About from '../pages/about/About.jsx';
import ErrorPageNotFound from '../pages/errorPageNotFound/ErrorPageNotFound.jsx'

const HeaderFooterLayout =  () => {
    return <>
        <Navbar />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
}

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPageNotFound />,
    element: (<HeaderFooterLayout/>),
    children:[
        {
            path: "/",
            element: <Homepage/>
        },
        {
            path: "/flat",
            element: <Apartmentpage />
        },
        {
            path:"/about",
            element: <About />
        },
        {
            path:"/contact",
            element:<h1>Contact</h1>
        }
    ],
  },
]);

export default router