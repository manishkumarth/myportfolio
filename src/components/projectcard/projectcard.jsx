// import React from 'react'

// function Projectcard(props) {
//   return (
//     <div className='cardprojects1 shadow card card-hai  mx-auto bg-primary' style={{width:"auto",height:"250px"}} >
//         <img className='project-img card-img' src={props.src} alt="imgproject"  />
//         <div className='card-body cardbody'>
//             {/* text ? */}
//             <h3>{props.titles}</h3>
//             <p>{props.details}</p>
//         </div>
//     </div>
//   )
// }

// export default Projectcard

import React from 'react';

function Projectcard(props) {
  const styles = {
    card: {
      // textDecoration:"none",
      width: "100%",
      maxWidth: "350px",
      height: "300px",
      background: "white",
      // backgroundColor:"rgb(234, 234, 234)",
      backdropFilter: "blur(10px)",
      borderRadius: "15px",
      overflow: "hidden",
      // transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      color:"black",
      // border: "5px solid black",
      boxShadow: "0 0px 10px red ",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
    },
    cardBody: {
      padding: "15px",
      textAlign: "center",
    },
    title: {
      fontSize: "1.4rem",
      // color: "#ffffff",
      fontWeight: "bold",
      marginBottom: "10px",
      transition: "text-shadow 0.3s ease-in-out",
    },
    titleHover: {
      textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
    },
    details: {
      fontSize: "0.9rem",
      // color: "#f1f1f1",
      lineHeight: "1.4",
    },
  };

  return (
    <div
      className=""
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <img className="project-img" src={props.src} alt="imgproject" style={styles.image} />
      <div className="card-body" style={styles.cardBody}>
        <h3
          style={styles.title}
          onMouseEnter={(e) => (e.currentTarget.style.textShadow = styles.titleHover.textShadow)}
          onMouseLeave={(e) => (e.currentTarget.style.textShadow = "")}
        >
          {props.titles}
        </h3>
        <p style={styles.details}>{props.details}</p>
      </div>
    </div>
  );
}

export default Projectcard;
