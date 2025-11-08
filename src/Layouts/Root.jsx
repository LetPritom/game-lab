import React from 'react';
import { Outlet } from 'react-router';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';

const Root = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Navbar></Navbar>
            <ImageSlider></ImageSlider>

            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};

export default Root;