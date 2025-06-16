// src/components/TeamCard.jsx
import { useState } from 'react';

export default function TeamCard({ name, role, disc, github, linkedin }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        margin: '1rem',
        borderRadius: '10px',
        width: '200px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        background: 'black',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 style={{ fontFamily: 'Tinos, serif', fontWeight: 900, fontOpticalSizing: 'auto'}}>{name}</h2>
      <h3 style={{ fontFamily: 'Martin Mono, monospace', fontWeight: 700, fontOpticalSizing: 'auto'}}>{role}</h3>

      <div style={{
        maxHeight: hovered ? '300px' : '0px',
        opacity: hovered ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        marginTop: hovered ? '1rem' : '0'
      }}>
        <p style={{fontFamily: 'Martin Mono, monospace', fontWeight: 400, fontOpticalSizing: 'auto'}}>{disc}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br />
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
