// import React from 'react'
// import Projectcard from './projectcard'
// import styles from './projectall.module.css'
// function Projectcardall() {
//     return (
//         <div className='container-flued'>
//             <div className='container rounded'>
//                 <div className={`${styles.projectcontainer}  row  shadow`}>
//                 <a 
//               className={`${styles.projects} project col-lg-4 col-md-6  `}>
//               <Projectcard src="./public/img/projectimg4.png"
//                 titles="Portfilo"
//                 details="fully responsive portfilo website with animation in react js project "
//               />
//             </a>

//             <a
//               href='https://puzzleggames.vercel.app/' target='_blank'
//               className={`${styles.projects} project col-lg-4 col-md-6  `}>
//               <Projectcard src="./public/img/projectimg01.png"
//                 titles="Puzzle game"
//                 details="drag and drop puzzle gamge with timmer using html css javascript"
//               />
//             </a>
//             <a
//               href='https://phonepay02.vercel.app/' target='_blank'
//               className={`${styles.projects} project col-lg-4 col-md-6  `}>
//               <Projectcard src="./public/img/projectimg02.png"
//                 titles="Phonepay clone"
//                 details="fully functional phonepay clone using html css javascript using html css js"
//               />
//             </a>
//             <a
//               href='https://employee-management-app-8xz1.vercel.app/' target='_blank'
//               className={`${styles.projects} project col-lg-4 col-md-6  `}>
//               <Projectcard src="./public/img/projectimg03.png"
//                 titles="Employee management app"
//                 details="employee management app using react js with crud operation assign task to your employee and add emplyee"
//               />
//             </a>
//             <a
//               href='https://employee-management-app-8xz1.vercel.app/' target='_blank'
//               className={`${styles.projects} project col-lg-4 col-md-6  `}>
//               <Projectcard src="./public/img/projectimg03.png"
//                 titles="Employee management app"
//                 details="employee management app using react js with crud operation assign task to your employee and add emplyee"
//               />
//             </a>
//                     <a
//               href='https://ecommerce-one-psi-70.vercel.app/' target='_blank'
//               className={`${styles.projects} project col-lg-4 col-md-6  `}>
//               <Projectcard src="./public/img/projectimg05.png"
//                 titles="E-commerces"
//                 details="fully responsive e-commerce website with api search filter and payment gateway"
//               />
//             </a>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Projectcardall


import React from "react";
import Projectcard from "./projectcard";

const styles = {
  container: {
    width: "100%",
    padding: "20px 0",
    // backgroundColor: "#f8f9fa",
    backgroundColor:"#cec5c5;"
  },
  projectContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  projectCard: {
    textDecoration: "none",
    width: "calc(33.333% - 20px)",
    minWidth: "280px",
    maxWidth: "400px",
    transition: "transform 0.3s ease-in-out",
  },
  projectCardHover: {
    transform: "scale(1.05)",
  },
};

function Projectcardall() {
  return (
    <div style={styles.container}>
      <div style={styles.projectContainer} className="row">
        <a style={styles.projectCard} href="#">
          <Projectcard
            src="./public/img/projectimg4.png"
            titles="Portfolio"
            details="Fully responsive portfolio website with animation in React.js"
          />
        </a>

        <a
          href="https://puzzleggames.vercel.app/"
          target="_blank"
          style={styles.projectCard}
          rel="noopener noreferrer"
        >
          <Projectcard
            src="./public/img/projectimg01.png"
            titles="Puzzle Game"
            details="Drag and drop puzzle game with timer using HTML, CSS, and JavaScript"
          />
        </a>

        <a
          href="https://phonepay02.vercel.app/"
          target="_blank"
          style={styles.projectCard}
          rel="noopener noreferrer"
        >
          <Projectcard
            src="./public/img/projectimg02.png"
            titles="PhonePe Clone"
            details="Fully functional PhonePe clone using HTML, CSS, and JavaScript"
          />
        </a>

        <a
          href="https://employee-management-app-8xz1.vercel.app/"
          target="_blank"
          style={styles.projectCard}
          rel="noopener noreferrer"
        >
          <Projectcard
            src="./public/img/projectimg03.png"
            titles="Employee Management App"
            details="Employee management app using React.js with CRUD operations"
          />
        </a>

        <a
          href="https://ecommerce-one-psi-70.vercel.app/"
          target="_blank"
          style={styles.projectCard}
          rel="noopener noreferrer"
        >
          <Projectcard
            src="./public/img/projectimg05.png"
            titles="E-Commerce"
            details="Fully responsive e-commerce website with API, search filter, and payment gateway"
          />
        </a>
      </div>
    </div>
  );
}

export default Projectcardall;