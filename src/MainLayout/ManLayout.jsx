// src/MainLayout/ManLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

// 🔹 Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4,
};

const ManLayout = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* Banner & Newsletter section */}
        <section>
          <Banner />
          <Newsletter />
        </section>

        {/* ✅ Page Transition Section */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            className="min-h-[60vh]"
          >
            <Outlet />
          </motion.section>
        </AnimatePresence>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ManLayout;
