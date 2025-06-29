// Teamcard code manages animations and effects for team member cards
import { useState, useRef, useEffect } from "react"

import { gsap } from "gsap"



export default function TeamCard({ name, role, disc, github, linkedin, index }) {

  const [hovered, setHovered] = useState(false)

  const cardRef = useRef(null)

  const contentRef = useRef(null)

  const glowRef = useRef(null)



  useEffect(() => {

    // Initial setup for the animation

    gsap.set(contentRef.current, { opacity: 0, height: 0 })

  }, [])



  const handleMouseEnter = () => {

    setHovered(true)



    // Card hover animation

    gsap.to(cardRef.current, {

      scale: 1.05,

      rotationY: 5,

      z: 50,

      duration: 0.3,

      ease: "power2.out",

    })



    // Glow effect

    gsap.to(glowRef.current, {

      opacity: 0.6,

      scale: 1.1,

      duration: 0.3,
      ease: "power2.out",
    })



    // Content reveal animation section
    gsap.to(contentRef.current, {

      opacity: 1,

      height: "auto",

      duration: 0.4,

      ease: "power2.out",

    })

  }



  const handleMouseLeave = () => {

    setHovered(false)



    // Reset card animation

    gsap.to(cardRef.current, {

      scale: 1,

      rotationY: 0,

      z: 0,

      duration: 0.3,

      ease: "power2.out",

    })



    // Reset glow effect

    gsap.to(glowRef.current, {

      opacity: 0,

      scale: 1,

      duration: 0.3,

      ease: "power2.out",

    })



    // Hide content animation

    gsap.to(contentRef.current, {

      opacity: 0,

      height: 0,

      duration: 0.3,

      ease: "power2.out",

    })

  }



  return (

    <div style={{ position: "relative", margin: "1rem" }}>

      {/* Glow effect */}

      <div

        ref={glowRef}

        style={{

          position: "absolute",

          top: "-5px",

          left: "-5px",

          right: "-5px",

          bottom: "-5px",

          background: `linear-gradient(45deg, 

            rgba(221, 160, 221, 0.6), 

            rgba(230, 230, 250, 0.6)

          )`,

          borderRadius: "15px",

          opacity: 0,

          filter: "blur(10px)",

          zIndex: -1,

        }}

      />



      <div

        ref={cardRef}

        style={{

          border: "1px solid rgba(221, 160, 221, 0.3)",

          padding: "1.5rem",

          borderRadius: "10px",

          width: "220px",

          position: "relative",

          overflow: "hidden",

          background: "rgba(248, 248, 255, 0.9)",

          backdropFilter: "blur(10px)",

          cursor: "pointer",

          transformStyle: "preserve-3d",

        }}

        onMouseEnter={handleMouseEnter}

        onMouseLeave={handleMouseLeave}

      >

        {/* Animated border */}

        <div

          style={{

            position: "absolute",

            top: 0,

            left: 0,

            right: 0,

            bottom: 0,

            background: `linear-gradient(45deg, 

              transparent, 

              rgba(221, 160, 221, 0.5), 

              transparent

            )`,

            opacity: hovered ? 0.3 : 0,

            transition: "opacity 0.3s ease",

            borderRadius: "10px",

            zIndex: -1,

          }}

        />



        <h2

          style={{

            fontFamily: "Tinos, serif",

            fontWeight: 900,

            fontOpticalSizing: "auto",

            color: "#4a4a4a",

            marginBottom: "0.5rem",

            textShadow: "0 2px 4px rgba(221, 160, 221, 0.2)",

          }}

        >

          {name}

        </h2>



        <h3

          style={{

            fontFamily: "Martin Mono, monospace",

            fontWeight: 700,

            fontOpticalSizing: "auto",

            color: "#6a5acd",

            marginBottom: "1rem",

            fontSize: "0.9rem",

          }}

        >

          {role}

        </h3>



        <div

          ref={contentRef}

          style={{

            overflow: "hidden",

          }}

        >

          {disc && (

            <p

              style={{

                fontFamily: "Martin Mono, monospace",

                fontWeight: 400,

                fontOpticalSizing: "auto",

                color: "rgba(74, 74, 74, 0.8)",

                marginBottom: "1rem",

                fontSize: "0.8rem",

              }}

            >

              {disc}

            </p>

          )}



          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>

            <a

              href={github}

              target="_blank"

              rel="noopener noreferrer"

              style={{

                color: "#6a5acd",

                textDecoration: "none",

                padding: "0.5rem 1rem",

                border: "1px solid rgba(106, 90, 205, 0.5)",

                borderRadius: "20px",

                fontSize: "0.8rem",

                transition: "all 0.3s ease",

                background: "rgba(221, 160, 221, 0.1)",

              }}

              onMouseEnter={(e) => {

                e.target.style.background = "rgba(106, 90, 205, 0.8)"

                e.target.style.color = "white"

                e.target.style.transform = "translateY(-2px)"

              }}

              onMouseLeave={(e) => {

                e.target.style.background = "rgba(221, 160, 221, 0.1)"

                e.target.style.color = "#6a5acd"

                e.target.style.transform = "translateY(0)"

              }}

            >

              GitHub

            </a>



            <a

              href={linkedin}

              target="_blank"

              rel="noopener noreferrer"

              style={{

                color: "#9370db",

                textDecoration: "none",

                padding: "0.5rem 1rem",

                border: "1px solid rgba(147, 112, 219, 0.5)",

                borderRadius: "20px",

                fontSize: "0.8rem",

                transition: "all 0.3s ease",

                background: "rgba(230, 230, 250, 0.1)",

              }}

              onMouseEnter={(e) => {

                e.target.style.background = "rgba(147, 112, 219, 0.8)"

                e.target.style.color = "white"

                e.target.style.transform = "translateY(-2px)"

              }}

              onMouseLeave={(e) => {

                e.target.style.background = "rgba(230, 230, 250, 0.1)"

                e.target.style.color = "#9370db"

                e.target.style.transform = "translateY(0)"

              }}

            >

              LinkedIn

            </a>

          </div>

        </div>

      </div>

    </div>

  )

}

