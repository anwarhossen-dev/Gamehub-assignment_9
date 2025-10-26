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


// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Banner from '../components/Banner';
// import Newsletter from '../components/Newsletter';
// import Footer from '../components/Footer';

// const MainLayout = () => {
//   return (
//     <>
//       <header>
//         <Navbar />
//       </header>
//       <main>
//         <section className=''>
//           <Banner />
//           <Newsletter />
//         </section>
//         <section>
//           <Outlet />
//         </section>
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </>
//   );
// };

// export default MainLayout;