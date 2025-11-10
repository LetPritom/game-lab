import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { RingLoader } from 'react-spinners';

const Root = () => {

     const navigation = useNavigate();
     if (navigation.state ==='loading') {
        return <RingLoader></RingLoader>
     }
    return (

        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;