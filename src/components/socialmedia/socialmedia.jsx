import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import {Link} from 'react-router-dom'

function Socialmedia() {
  return (
    <div>
        <ul className='social55'>
    <li className=''>
      <Link to="#" target="_black" className="socialall" href=""><FaEnvelope /></Link>
    </li>
    <li>
      <Link to="https://www.linkedin.com/in/manish-kumar-443b382aa/" target="_black"  className="socialall" href=""><FaLinkedin /></Link>
    </li>
   
    <li>
      <Link to="https://github.com/manishkumarth" target="_black"  className="socialall" href=""><FaGithubSquare />
      </Link>
    </li>
    <li>
      <Link to="#" target="_black"  className="socialall" href=""><FaPhone /></Link>
    </li>
    
    </ul>
  </div>
  )
}

export default Socialmedia