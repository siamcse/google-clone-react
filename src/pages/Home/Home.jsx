import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='max-h-screen'>
            <Navbar />
            <SearchBar />
            <Footer />
        </div>
    );
};

export default Home;