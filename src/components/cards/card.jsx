import React, { useState } from "react";

function Card({ imageSrc, title, text }) {
  const [flipped, setFlipped] = useState(false);

  // Styles as JavaScript objects
  const styles = {
    flipCard: {
      width: "120px", 
      height: "140px",
      perspective: "1000px",
      cursor: "pointer",
    },
    flipCardInner: {
      width: "100%",
      height: "100%",
      position: "relative",
      transformStyle: "preserve-3d",
      transition: "transform 0.6s ease-in-out",
      transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
    },
    flipCardFront: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backfaceVisibility: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f8f9fa",
      padding: "10px",
    },
    flipCardBack: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backfaceVisibility: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#0056b3", // Improved blue color
      color: "white",
      transform: "rotateY(180deg)",
      textAlign: "center",
      padding: "10px",
    },
    cardIcon: {
      width: "50px",
      height: "50px",
    },
    text: {
      fontSize: "12px",
      margin: "5px 0",
    },
    button: {
      marginTop: "8px",
      padding: "5px 10px",
      fontSize: "10px",
      borderRadius: "5px",
      backgroundColor: "white",
      color: "#0056b3",
      border: "none",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#f0f0f0",
    },
  };

  return (
    <div
      style={styles.flipCard}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div style={styles.flipCardInner}>
        {/* Front Side (Icon) */}
        <div style={styles.flipCardFront}>
          <img src={imageSrc} alt={title} style={styles.cardIcon} />
        </div>

        {/* Back Side (Text Info + Button) */}
        <div style={styles.flipCardBack}>
          <h6 style={styles.text}>{title}</h6>
          <p style={styles.text}>{text}</p>
          <button
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
