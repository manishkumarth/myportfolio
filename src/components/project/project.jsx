
import React from "react";
import { motion } from "framer-motion";
import Projectcard from "../projectcard/projectcard";

function Project() {
  // Internal styles object
  const styles = {
    projectContainer: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      // background: "linear-gradient(135deg, rgb(30, 60, 114), rgb(42, 82, 152))",
  
      padding: "40px 0",
    },
    heading: {
      color: "#fff",
      fontSize: "2.5rem",
      fontWeight: "bold",
      textAlign: "center",
    },
    projectWrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      padding: "40px",
      // background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    },
    projectLink: {
      textDecoration: "none",
    },
  };

  return (
    <motion.div
      initial={{ x: "-100vw", rotate: 10 }}
      animate={{ x: 0, rotate: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={styles.projectContainer}
    >
      <div className="container">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          style={styles.heading}
        >
         Live Projects 
        </motion.h1>

        <motion.div
          initial={{ x: "100vw", rotate: 60 }}
          animate={{ x: 0, rotate: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 150 }}
          style={styles.projectWrapper}
        >
          {/* Project Items */}
          <a href="#" style={styles.projectLink}>
            <Projectcard
              src="/img/projectimg4.png"
              titles="Portfolio"
              details="Fully responsive portfolio website with animations in React.js"
            />
          </a>

          <a href="https://puzzleggames.vercel.app/" target="_blank" style={styles.projectLink}>
            <Projectcard
              src="public/img/projectimg01.png"
              titles="Puzzle Game"
              details="Drag and drop puzzle game with timer using HTML, CSS, and JavaScript"
            />
          </a>

          <a href="https://ecommerce-one-psi-70.vercel.app/" target="_blank" style={styles.projectLink}>
            <Projectcard
              src="public/img/projectimg04.png"
              titles="E-commerce"
              details="Fully responsive e-commerce website with payment gateway using React.js"
            />
          </a>

          <a href="https://phonepay02.vercel.app/" target="_blank" style={styles.projectLink}>
            <Projectcard
              src="public/img/projectimg02.png"
              titles="PhonePe Clone"
              details="Fully functional PhonePe clone using HTML, CSS, and JavaScript"
            />
          </a>

          <a href="https://employee-management-app-8xz1.vercel.app/" target="_blank" style={styles.projectLink}>
            <Projectcard
              src="public/img/projectimg03.png"
              titles="Employee Management App"
              details="React.js app with CRUD operations to assign and manage employees"
            />
          </a>

          <a href="https://ecommerce-one-psi-70.vercel.app/" target="_blank" style={styles.projectLink}>
            <Projectcard
              src="public/img/projectimg05.png"
              titles="E-commerce"
              details="Fully responsive e-commerce website with API search, filter, and payment gateway"
            />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Project;
