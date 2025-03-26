// import React from 'react'
// // import React, { useEffect } from 'react'
// import { motion } from 'framer-motion'
// import styles from './hero.module.css'
// import { Link } from 'react-router-dom';
// import Socialmedia from '../socialmedia/socialmedia';
// function Hero() {
//     console.log("caled")
//     return (
//         <div><div className={`${styles.homepaps}  container-flued`} style={{ width: "100vw", height: "100%" }}>
//             <div className='container'>
//                 <div className='row'>
//                     {/* left text and logos section  */}
//                     <div className={`${styles.lefthero1} col-lg-6`} style={{ height: "80vh" }}>
//                         {/* <div className={`${styles.leftrow} row`}> */}
//                         <h1 className={`${styles.heroheading1}`}>Hi Manish K!</h1>
//                         <div className={`${styles.heropara} shadow p-2`}>
//                             <p className={`${styles.heropara1}  pt-2`}>
//                                 I'm a frontend developer with strong foundation in HTML, CSS, JavaScript and React. I'm passionate about building responsive and user-friendly interfaces.
//                             </p>
                           
//                         </div>
//                         {/* btn section  */}
//                         <motion.div
//                             initial={{ x: "-70vw" }}
//                             animate={{ x: 0 }}

//                             transition={{type:"spring",stiffness:50}}
//                             className={`${styles.btnhero} col btnhero`}>
//                             <Link to="/profile">
//                                 <button className='btn btn-primary px-4 py-2'>CV</button>
//                             </Link>
//                             <Link to="/contact">
//                                 <button className='btn btn-primary px-4 py-2'>Hire me</button>
//                             </Link>
//                         </motion.div>
//                         {/* icons social media  */}
//                         <motion.div
//                         initial={{y:300}}
//                         animate={{y:0}}
//                         transition={{type:"spring",stiffness:50}}

                         
//                             className={`${styles.sociallinks} col borderj mt-5 sociallinks`}>
//                             {/* social media componenets  */}
//                             <Socialmedia />


//                         </motion.div>
//                         {/* </div> */}
//                     </div>
//                     {/* img or here right  section  */}
//                     <div className='col-lg-6'>
//                         <div className={`${styles.rightimg}  rightimg`}>
//                             <motion.div
//                                 ref={{ x: 100 }}
//                                 initial={{ y: 360 }}
//                                 animate={{ y:  0}}
//                                 transition={{ type: "spring", stiffness: "100" }}

//                             >
//                                 <img
                                    
//                                     className={`${styles.imghero1} imghero1`} style={{ height: "100%", width: "100%" }} src="./public/img/profileimg01-removebg-preview.png" alt="hero img" />
//                             </motion.div>
//                         </div>
//                         <span > <h3 className={`${styles.years10} `}>Frontend <p>Developer </p></h3> </span>
//                     </div>
//                 </div>
//             </div>


//         </div>
//         </div>
//     )
// }

// export default Hero
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Socialmedia from "../socialmedia/socialmedia";

function Hero() {
  // Internal styles object
  const styles = {
    heroContainer: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      padding: "40px 0",
    },
    heroHeading: {
      color: "#fff",
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    heroDescription: {
      color: "#ddd",
      fontSize: "1.2rem",
      lineHeight: "1.6",
      background: "rgba(255, 255, 255, 0.1)",
      padding: "15px",
      borderRadius: "8px",
    },
    heroButtons: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
    },
    cvButton: {
      padding: "10px 20px",
      fontSize: "1rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      background: "#fff",
      color: "#000",
    },
    hireButton: {
      padding: "10px 20px",
      fontSize: "1rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      background: "#007bff",
      color: "#fff",
    },
    socialLinks: {
      marginTop: "20px",
    },
    profileImageContainer: {
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "6px solid #fff",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
      margin: "auto",
    },
    profileImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    developerText: {
      color: "#fff",
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginTop: "10px",
    },
    highlight: {
      color: "#ffd700",
    },
  };

  return (
    <div style={styles.heroContainer}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section (Text + Buttons + Social Media) */}
          <motion.div
            className="col-lg-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={styles.heroHeading}>Hi, I'm Manish Kumar!</h1>
            <p style={styles.heroDescription}>
              I’m a Frontend Developer specializing in HTML, CSS, JavaScript,
              and React. I love crafting elegant, responsive, and interactive
              user interfaces.
            </p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
              style={styles.heroButtons}
            >
              <Link to="/profile">
                <button style={styles.cvButton}>Download CV</button>
              </Link>
              <Link to="/contact">
                <button style={styles.hireButton}>Hire Me</button>
              </Link>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 60 }}
              style={styles.socialLinks}
            >
              <Socialmedia />
            </motion.div>
          </motion.div>

          {/* Right Section (Profile Image) */}
          <motion.div
            className="col-lg-6 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.profileImageContainer}>
              <motion.img
                src='./img/profileimg01-removebg-preview.png'
                alt="Hero"
                style={styles.profileImage}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              />
            </div>

            <h3 style={styles.developerText}>
              Frontend <span style={styles.highlight}>Developer</span>
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
