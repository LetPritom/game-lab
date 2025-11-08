import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Navbar></Navbar>

            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};

export default Root;