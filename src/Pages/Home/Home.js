import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
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
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Projects></Projects>
            <Workers></Workers>
            <Business></Business>
            <Blogs></Blogs>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;