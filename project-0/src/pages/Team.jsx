import TeamCard from './TeamCard';
// to be able to navigate back to the home page
import { useNavigate } from 'react-router-dom';
import teamMembers from '../store/teamMockData';


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
  
