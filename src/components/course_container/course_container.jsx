import React from "react";
import { motion } from "framer-motion";
import Card from "../cards/card";

function Course_container() {
  const variants = {
    hide: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  // Inline styles (Removed flex-wrap)
  const styles = {
    container: {
    //   background: "linear-gradient(135deg, rgb(30, 60, 114), rgb(42, 82, 152))", // Light gray background
      backgroundColor:"#eaeaea",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow effect
    },
  };

  const cardsData = [
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React.js", text: "JavaScript library for UI.", link: "https://react.dev/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript", text: "Language of the web.", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML & CSS", text: "Web design basics.", link: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB", text: "NoSQL database.", link: "https://www.mongodb.com/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js", text: "Backend runtime.", link: "https://nodejs.org/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", title: "GitHub", text: "Version control.", link: "https://github.com/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", title: "Git", text: "Version control system.", link: "https://git-scm.com/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", title: "Linux & Terminal", text: "Command-line mastery.", link: "https://www.linux.org/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", title: "TypeScript", text: "Typed JavaScript.", link: "https://www.typescriptlang.org/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", title: "Express.js", text: "Fast backend framework.", link: "https://expressjs.com/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", title: "Python", text: "Versatile language.", link: "https://www.python.org/" },
    { imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", title: "GitHub", text: "Version control.", link: "https://github.com/" },

];

  return (
    <>
   
    <div style={styles.container} className="container mt-5 ">
    <h5 className="text-center text-white bg-primary" >Expertise</h5>
      <div className="row flex justify-center">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-3"
            variants={variants}
            initial="hide"
            animate="show"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card imageSrc={card.imageSrc} title={card.title} text={card.text} />
            <div className="text-center mt-1">
              <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                Learn
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Course_container;
