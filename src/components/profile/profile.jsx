// import React from 'react'
// import { motion } from 'framer-motion'
// import Skills from '../skills/skills'
// import Socialmedia from '../socialmedia/socialmedia'
// import Galary from '../galary/galary'
// import { Link } from 'react-router-dom'
// // import Slidercard from '../slidercard/slidercard'

// function Profile() {
//   return (
//     <motion.div
//       initial={{
//         x: "100vw",
//         rotate: 10
//       }}
//       animate={{
//         x: 0,
//         rotate: 0
//       }}
//       transition={{ type: "spring", stiffness: 100 }}
//     // style={{width:"100%"}}
//     > <div className='bg1c container-flued' style={{ width: "100vw", height: "100%" }}>
//         {/* container project components */}
//         <div className='container'>
//           <div className='row'>
//             <div className="left-style-project p-5 col-lg-6">
//               {/* left side  */}
//               <motion.div
             
    
//               transition={{delay:1}}
//               className='prfile-img-div border'>
//                 <img className='prfile-img' src="./public/img/profileimg01-modified.png" alt=""  />
//               </motion.div>
//               <div className='btn-project'>
//                 <button className='btn-project-all   bg-light'>Project</button>
//                 <Link to="/project" className='btn-project-all   bg-dark text-light'>Touch_in</Link>
//               </div>
//             </div>
//             <div className="right-style-project  col-lg-6">
//               {/* right side  */}
              
//                 <div className='container left-side-container-profile'>
//                   <div className='row '>
//                     <div className='col-12 text-light fw-4 rounded left-side-text'>
//                       <h6>A web developer is a skilled professional who designs and builds websites using languages like HTML, CSS, JavaScript, and back-end technologies such as Python or Node.js. They work on both the front-end (user interface) and back-end (server-side) to create responsive, functional websites. Web developers focus on optimizing site performance, ensuring security, and enhancing the userexperience. Whether specializing in front-end, back-end, or full-stack development, they stay updated with the latest trends and tools. Web developers may work independently or as part of a</h6></div>
                    
//                     <div className='col-12 mt-4 rounded text-light fw-4  left-side-text'>
//                       <h6>A web developer is a skilled professional who designs and builds websites using languages like HTML, CSS, JavaScript, and back-end technologies such as Python or Node.js. They work on both the front-end (user interface) and back-end (server-side) to create responsive, functional websites. Web developers focus on optimizing site performance, ensuring security, and enhancing the user experience. Whether specializing in front-end, back-end, or full-stack development, they stay updated with the latest trends and tools. Web developers may work independently or as part of a</h6></div>
//                   </div>
//                 </div>
                  
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* galary section  */}
//       {/* <div>
//             <Galary />
//       </div> */}
//     </motion.div>
//   )
// }

// export default Profile
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "100vw",
        minHeight: "100vh",
        // background: "linear-gradient(135deg, #1f4037, #99f2c8)",
        // background: "linear-gradient(135deg, rgb(30, 60, 114), rgb(42, 82, 152))",
        backgroundColor:"#eaeaea",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1100px",
          background: "#fff",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Profile Image Section */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: "1",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid #007bff",
              display: "inline-block",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src="./public/img/profileimg01-modified.png"
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </motion.div>

        {/* Profile Information Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "2",
            textAlign: "left",
          }}
        >
          <h1 style={{ fontSize: "2.2rem", color: "#333", marginBottom: "10px" }}>
            Hi, I'm Manish Kumar
          </h1>
          <h3 style={{ color: "#007bff", marginBottom: "15px" }}>
            Frontend Developer 
          </h3>
          <p
            style={{
              color: "#555",
              fontSize: "1rem",
              lineHeight: "1.6",
              maxWidth: "500px",
            }}
          >
            Passionate about building interactive and engaging web applications
            with a focus on user experience. I specialize in crafting dynamic
            and scalable React-based solutions.
          </p>

          {/* Buttons Section */}
          <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
            <Link
              to="/project"
              style={{
                padding: "12px 20px",
                background: "#007bff",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                transition: "0.3s",
                boxShadow: "0 3px 10px rgba(0, 123, 255, 0.3)",
              }}
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              style={{
                padding: "12px 20px",
                background: "#333",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                transition: "0.3s",
              }}
            >
              Contact Me
            </Link>
          </div>

          {/* Social Media Links */}
          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <Link to="https://github.com/manishkumarth" target="_blank">
              <FaGithub
                style={{
                  fontSize: "1.8rem",
                  color: "#333",
                  transition: "0.3s",
                }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/manish-kumar-443b382aa/"
              target="_blank"
            >
              <FaLinkedin
                style={{
                  fontSize: "1.8rem",
                  color: "#007bff",
                  transition: "0.3s",
                }}
              />
            </Link>
            <Link to="mailto:manish@example.com">
              <FaEnvelope
                style={{
                  fontSize: "1.8rem",
                  color: "#d44638",
                  transition: "0.3s",
                }}
              />
            </Link>
            <Link to="tel:+1234567890">
              <FaPhone
                style={{
                  fontSize: "1.8rem",
                  color: "#28a745",
                  transition: "0.3s",
                }}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Profile;



