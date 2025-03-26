import { motion } from 'framer-motion'


import styles from './home.module.css'
import Contact from '../contact/contact';
import Course_container from '../course_container/course_container';
// import Project from '../project/project';
import Slidercard from '../slidercard/slidercard';
import Skills from '../skills/skills';

// import Footer from '../footer/footer';
import Hero from '../hero/hero';
import Galary from '../galary/galary';
import Projectcard from '../projectcard/projectcard';
import Projectcardall from '../projectcard/projectcardall';
import Onebadacard from '../badacard/onebadacard';
import Galaryanimate from '../../components2/galaryanimate/galaryanimate';
import Profile from '../profile/profile';

function Home() {


  return (
    <>
      <div
      >

        <div >
          <Profile />
        </div>
        <div className='text-center container rounded-4' >
          <h3 className='text-center shadow'>Project section </h3>
        </div>

        <div className='projectcard-home-page mt-5 '>
          {/* project center  */}
          <Projectcardall />
        </div>
      

        {/* <div className=''> */}
        <div className=''>
          <Course_container />
        </div>


        <div className='mt-5 contact-home' style={{ width: "100%", height: "auto" }}> <Contact /> </div>
      </div>
    </>
  )
}

export default Home

