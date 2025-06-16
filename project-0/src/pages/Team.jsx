import TeamCard from './TeamCard';
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const teamMembers = [
  { name: 'Aymen', role: 'CEO', disc: 'Visionary leader passion about advancing patient care through innovation, collaboration, and service excellence', github: 'https://github.com/Fandam11', linkedin: 'https://www.linkedin.com/in/aymen-fandam-1b0a4b1b6/' },
  { name: 'Ali Hassan', role: 'Team Manager & DevOps', github: 'https://github.com/A1iHassan', linkedin: 'https://www.linkedin.com/in/ali-haj-ali-165110212' },
  { name: 'Hammam AbdElmajed', role: 'Frontend Engineer', github: 'https://github.com/Hammamabdelmajed', linkedin: 'https://www.linkedin.com/in/hammmam-abdelmajed-593833200' },
  { name: 'Modather Abd Alhag', role: 'Frontend Engineer', github: 'https://github.com/modtherhub', linkedin: 'https://www.linkedin.com/in/modather-abd-alhag-4b0a1b1b6/' },
  { name: 'Omnia Ahmed', role: 'Frontend Engineer', github: 'https://github.com/Moniaar', linkedin: 'https://www.linkedin.com/in/moniaar' },
  { name: 'Abd Elaziz Mohsen', role: 'Backend Engineer', github: 'https://github.com/Batman99SD', linkedin: 'https://www.linkedin.com/in/abd-elaziz-mohsen-4b0a1b1b6/' },
  { name: 'Mohamed Musa', role: 'Backend Engineer', github: 'https://github.com/Kusa-san', linkedin: 'https://www.linkedin.com/in/mohamed-musa-4b0a1b1b6/' },
  { name: 'Omer Alfaroug', role: 'DevOps', github: 'https://github.com/Mr-Robinhood', linkedin: 'https://www.linkedin.com/in/omer-alfaroug-mohammed-ali' },
];

export default function Team() {
  const navigate = useNavigate();
  const headerRef = useRef(null);

  useEffect(() => {
      if (!headerRef.current) return;

      const { words } = splitText(headerRef.current);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.08),
        }
      );
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1
        ref={headerRef}
        style={{
          marginBottom: '40px',
          fontWeight: 900,
          fontOpticalSizing: 'auto',
          color: 'white',
        }}
      >
        Meet Our Team
      </h1>
      <button
        onClick={() => navigate(-1)}
        style={{
          margin: '1rem',
          fontFamily: 'Tinos, serif',
          fontWeight: 500,
          fontOpticalSizing: 'auto'
        }}
      >
        ⬅ Go Back
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
