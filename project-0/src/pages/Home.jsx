import {Link} from 'react-router-dom';

export default function Home() {
	return (
		<div style={{
			textAlign: 'center',
			marginBottom: '50em'
		}}>
		<h1 style={{ fontFamily: 'Tinos, serif', fontWeight: 900, fontOpticalSizing: 'auto'}}>Team Members</h1>
		<Link to="/">Go to the landing page</Link>
		<br />
		<Link to="/team" style={{fontFamily: 'Tinos, serif', fontWeight: 900, fontOpticalSizing: 'auto'}}>Meet the team</Link>
		</div>
	);
}
