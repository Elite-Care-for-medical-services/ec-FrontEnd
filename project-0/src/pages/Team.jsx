// Team.jsx has everyone's information and the team card component and the background animation
import TeamCard from "./TeamCard"
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Team members data
const teamMembers = [
  {
    name: "Aymen Elnour",
    role: "CEO",
    github: "https://github.com/Fandam11",
    linkedin:
      "https://www.linkedin.com/in/ayman-elnour-80744b282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Ali Hassan",
    role: "Team Manager & DevOps",
    github: "https://github.com/A1iHassan",
    linkedin: "https://www.linkedin.com/in/ali-haj-ali-165110212",
  },
  {
    name: "Hammam AbdElmajed",
    role: "Frontend Engineer",
    github: "https://github.com/Hammamabdelmajed",
    linkedin: "https://www.linkedin.com/in/hammmam-abdelmajed-593833200",
  },
  {
    name: "Modather Abd Alhag",
    role: "Frontend Engineer",
    github: "https://github.com/modtherhub",
    linkedin: "https://www.linkedin.com/in/modather-abd-alhag-4b0a1b1b6/",
  },
  {
    name: "Omnia Ahmed",
    role: "Frontend Engineer",
    github: "https://github.com/Moniaar",
    linkedin: "https://www.linkedin.com/in/moniaar",
  },
  {
    name: "Abd Elaziz Mohsen",
    role: "Backend Engineer",
    github: "https://github.com/Batman99SD",
    linkedin: "https://www.linkedin.com/in/abd-elaziz-mohsen-4b0a1b1b6/",
  },
  {
    name: "Mohamed Musa",
    role: "Backend Engineer",
    github: "https://github.com/Kusa-san",
    linkedin: "https://www.linkedin.com/in/mohamed-musa8800",
  },
  {
    name: "Omer Alfaroug",
    role: "DevOps",
    github: "https://github.com/Mr-Robinhood",
    linkedin: "https://www.linkedin.com/in/omer-alfaroug-mohammed-ali",
  },
]

export default function Team() {
  const navigate = useNavigate()
  const headerRef = useRef(null)
  const containerRef = useRef(null)
  const cardsRef = useRef([])
  const backgroundRef = useRef(null)

  // Header text animation
  useEffect(() => {
    if (!headerRef.current) return

    const { words } = splitText(headerRef.current)

    animate(
      words,
      {
        opacity: [0, 1],
        y: [30, 0],
        scale: [0.8, 1],
      },
      {
        type: "spring",
        duration: 1.5,
        bounce: 0.3,
        delay: stagger(0.1),
      },
    )
  }, [])

  // GSAP animations for cards and background
  useGSAP(() => {
    // Animate background gradient
    gsap.to(backgroundRef.current, {
      background: "linear-gradient(45deg, #f0f0f5 0%, #e6e6fa 50%, #f8f8ff 100%)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    // Staggered card entrance animation
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationY: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.5,
      },
    )

    // Floating animation for cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          y: Math.sin(index) * 10,
          duration: 2 + index * 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2,
        })
      }
    })
  }, [])

  return (
    <div
      ref={backgroundRef}
      style={{
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(45deg, #f5f5f7 0%, #e6e6fa 25%, #f0f0f5 50%, #dda0dd 75%, #f8f8ff 100%)",
        padding: "2rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%) 
        `,
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <h1
        ref={headerRef}
        style={{
          marginBottom: "40px",
          fontWeight: 900,
          fontOpticalSizing: "auto",
          color: "4a4a4a",
          fontSize: "3rem",
          textShadow: "0 0 20px rgba(221, 160, 221, 0.3)",
          position: "relative",
          zIndex: 2,
        }}
      >
        Meet Our Team
      </h1>
       <button
        onClick={() => navigate(-1)}
        style={{
          margin: "1rem",
          fontFamily: "Tinos, serif",
          fontWeight: 500,
          fontOpticalSizing: "auto",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "black",
          padding: "0.8rem 1.5rem",
          borderRadius: "25px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 2,
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.2)"
          e.target.style.transform = "translateY(-2px)"
          e.target.style.boxShadow = "0 5px 15px rgba(255, 255, 255, 0.2)"
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.1)"
          e.target.style.transform = "translateY(0)"
          e.target.style.boxShadow = "none"
        }}
      >
        ⬅ Go Back
      </button>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {teamMembers.map((member, index) => (
          <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <TeamCard {...member} index={index} />
          </div>
        ))}
      </div>

      <style jsx = "true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  )
}

