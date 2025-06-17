import {Link} from 'react-router-dom';

export default function Home() {
	return (
		<>
		<h1>Team Members</h1>
		<Link to="/">Go to the landing page</Link>
		<br />
		<Link to="/team">Meet the team</Link>
		</>
	);
}
