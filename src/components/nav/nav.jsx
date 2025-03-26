import React from 'react'
// import { a } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from "react-icons/gi";
import AOS from 'aos'
function Nav() {
    // const [a,Seta]=useState(0)
    const [show, Setshow] = useState(false)
    // const navigate=documenet.querySelector(".navigate")
    const handlleClick = () => {
         Setshow(!show)
    }
    const navvariants = {
        initial: {
            y: -70
        },
        animate: {
            y: 0
        },
    }
    const clickhandle=()=>{
        
  }

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])
    return (
        <div className='container-flued   shadow' onClick={ handlleClick }
            style={{ width: "100%", height: "60px",background:"#1F1627" }}
        >
            <div className={`${styles.navbar} container`}>
                <div className={`${styles.logobox}`}>
                    <span data-aos="fade-right" className={`${styles.name1} nameall`}>m</span>
                    <span data-aos="fade-down" className={`${styles.name2} nameall`}>a</span>
                    <span data-aos="fade-up" className={`${styles.name3} nameall`}>n</span>
                    <span data-aos="fade-down" className={`${styles.name4} nameall`}>i</span>
                    <span data-aos="fade-up" className={`${styles.name5} nameall`}>s</span>
                    <span data-aos="fade-left" className={`${styles.name6} nameall`}>h</span>
                    {/* <img className={`${styles.logo}`} src="../public/img/logo.png" alt="logo" /> */}
                </div>
                <motion.div
                 variants={navvariants}
                 initial="initial"
                 animate="animate"
                 transition={{
                     type: "spring", stiffness: 300
                 }}
                 
                
                
                 className={show ? "show-menu":"hide-menu"}>
                    <ul
                       
                        

                        className={`${styles.navitmes} ulclass1`}>
                        <motion.li
                            variants={navvariants}
                            whileHover="hover"


                        >
                            <NavLink
                            
                                className={({ isActive }) =>
                                    isActive ? "active" : ''
                                }

                                to="">Home</NavLink>
                        </motion.li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active" : ''
                                }
                                to="/profile">skills</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active" : ''
                                }
                                to="/project">Project</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active" : ''
                                }
                                to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                </motion.div>
                <div className='menubtn11'>
                    <button
                         onClick={ handlleClick } className="btn px-2  border "

                    ><GiHamburgerMenu className='bg-light menubtn2' style={{ width: "20px", height: "20px" }} />
                    </button>
                </div>
            </div > 
        
        </div>
    )
}

export default Nav