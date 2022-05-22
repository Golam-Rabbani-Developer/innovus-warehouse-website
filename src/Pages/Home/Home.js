import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import Banner from './Banner/Banner';
import Blogs from './Blogs';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Services></Services>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;