
// import React from "react";
// import { motion } from "framer-motion";

// function Contact() {
//   // Inline Styles
//   const styles = {
//     container: {
//       width: "100%",
//       height: "100%",
//     },
//     formContainer: {
//       padding: "20px",
//       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//       backgroundColor: "#f8f9fa",
//       borderRadius: "10px",
//     },
//     label: {
//       fontWeight: "bold",
//       fontSize: "16px",
//     },
//     button: {
//       width: "100%",
//       fontSize: "18px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       padding: "10px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     image: {
//       width: "100%",
//       height: "auto",
//     },
//     logo: {
//       height: "130px",
//     },
//   };

//   return (
//     <motion.div
//       initial={{ x: "100vw", opacity: 0, rotate: 10 }}
//       animate={{ x: 0, opacity: 1, rotate: 0 }}
//       transition={{ type: "spring", stiffness: 100, damping: 10 }}
//       style={styles.container}
//     >
//       <div className="container py-5">
//         <div className="row align-items-center">
//           {/* Image Section */}
//           <div className="col-lg-6 col-sm-12 text-center">
//             <img className="img-fluid p-4" src="/img/contactpageimg.png" alt="Contact Illustration" style={styles.image} />
//           </div>

//           {/* Form Section */}
//           <div className="col-lg-6 col-sm-12">
//             <div className="text-center mb-3">
//               <img src="/img/messagelogo.png" alt="Message Icon" style={styles.logo} />
//             </div>

//             <div>
//               <form style={styles.formContainer}>
//                 <div className="mb-3">
//                   <label htmlFor="name" style={styles.label}>
//                     Name
//                   </label>
//                   <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="email" style={styles.label}>
//                     Email
//                   </label>
//                   <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="message" style={styles.label}>
//                     Message
//                   </label>
//                   <textarea id="message" className="form-control" rows="5" placeholder="Enter your query" required />
//                 </div>

//                 <button type="submit" style={styles.button} onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}>
//                   Contact
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
// export default Conatact

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      // background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      padding: "20px",
    },
    card: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "rgb(234, 234, 234);",
      
      color:"black",
      backdropFilter: "blur(10px)",
      borderRadius: "15px",
      // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 10px",
      width: "90%",
      maxWidth: "1000px",
      overflow: "hidden",
      // border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    left: {
      flex: 1,
      padding: "30px",
      display: "flex",
      flexDirection: "column",
    },
    right: {
      flex: 1,
      padding: "30px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderLeft: "2px solid rgba(255, 255, 255, 0.3)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "15px",
      // color: "#fff",
      textAlign: "center",
    },
    label: {
      fontSize: "14px",
      fontWeight: "bold",
      // color: "#fff",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      marginBottom: "15px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      // color: "#fff",
      outline: "none",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      marginBottom: "15px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      // color: "#fff",
      outline: "none",
      resize: "none",
      height: "100px",
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      // color: "#fff",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "0.3s",
    },
    contactInfo: {
      // color: "black",
      fontSize: "16px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    map: {
      width: "100%",
      height: "200px",
      borderRadius: "10px",
      border: "none",
      marginTop: "15px",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <div style={styles.card}>
        {/* Left - Contact Form */}
        <div style={styles.left}>
          <h2 style={styles.heading}>Get in Touch</h2>
          <form>
            <label style={styles.label}>Name</label>
            <input type="text" style={styles.input} placeholder="Enter your name" required />

            <label style={styles.label}>Email</label>
            <input type="email" style={styles.input} placeholder="Enter your email" required />

            <label style={styles.label}>Message</label>
            <textarea style={styles.textarea} placeholder="Enter your message" required />

            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Address & Google Map */}
        <div style={styles.right}>
          <h2 style={styles.heading}>Location</h2>

          <p style={styles.contactInfo}>
            <FaMapMarkerAlt /> Noida, Up, India
          </p>
          <p style={styles.contactInfo}>
            <FaEnvelope /> manish@example.com
          </p>
          <p style={styles.contactInfo}>
            <FaPhone /> +91 9876543210
          </p>

          {/* Google Map Embed */}
          <iframe
            title="Google Map"
            style={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448227.4065324574!2d77.2001368!3d28.5701104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56a0c631a0b%3A0xb1c5b9442e3a3e43!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1711500000000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;


