import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import Banner from './Banner/Banner';
import Blogs from './Blogs';
import Business from './Business/Business';
import Products from './Products';
import Projects from './Projects';
import Reviews from './Reviews';
import Services from './Services';
import Workers from './Workers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Projects></Projects>
            <Workers></Workers>
            <Business></Business>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;