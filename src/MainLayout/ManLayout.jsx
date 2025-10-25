import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';

const ManLayout = () => {
    return (
        <>
        <header>
            <Navbar/>
            
        </header>
        <main >
            {/* banner section and Newsletter section */}
            <section className=''>
                <Banner/>
            <Newsletter/>
            </section>
            <section>
                 <Outlet/>
            </section>
        </main>

        <footer>
            <Footer/>
        </footer>
        
            
           
        </>
    );
};

export default ManLayout;