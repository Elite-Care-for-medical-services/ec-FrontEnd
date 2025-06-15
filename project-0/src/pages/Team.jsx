import TeamCard from './TeamCard';
// to be able to navigate back to the home page
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  { name: 'Aymen', role: 'CEO', github: 'https://github.com/Fandam11', linkedin: 'https://www.linkedin.com/in/aymen-fandam-1b0a4b1b6/' },
  { name: 'Hammam AbdElmajed', role: 'Frontend Engineer', github: 'https://github.com/Hammamabdelmajed', linkedin: 'https://www.linkedin.com/in/hammam-abdelmajed-4b0a1b1b6/' },
  { name: 'Modather Abd Alhag', role: 'Frontend Engineer', github: 'https://github.com/modtherhub', linkedin: 'https://www.linkedin.com/in/modather-abd-alhag-4b0a1b1b6/' },
  { name: 'Omnia Ahmed', role: 'Frontend Engineer', github: 'https://github.com/Moniaar', linkedin: 'https://www.linkedin.com/in/omnia-ahmed-4b0a1b1b6/' },
  { name: 'Abd Elaziz Mohsen', role: 'Backend Developer', github: 'https://github.com/Batman99SD', linkedin: 'https://www.linkedin.com/in/abd-elaziz-mohsen-4b0a1b1b6/' },
  { name: 'Mohamed Musa', role: 'Backend Engineer', github: 'https://github.com/Kusa-san', linkedin: 'https://www.linkedin.com/in/mohamed-musa-4b0a1b1b6/' },
  { name: 'Omer Alfaroug', role: 'DevOps', github: 'https://github.com/Mr-Robinhood', linkedin: 'https://www.linkedin.com/in/omer-alfaroug-4b0a1b1b6/' },
  { name: 'Ali Hassan', role: 'DevOps', github: 'https://github.com/A1iHassan', linkedin: 'https://www.linkedin.com/in/ali-hassan-4b0a1b1b6/' },
];

export default function Team() {
  const navigate = useNavigate();

  return (
    <div>
      <p>
      </p>
      <h1>Meet Our Team</h1>
      <button onClick={() => navigate(-1)} style={{ margin: '1rem' }}>
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
  
