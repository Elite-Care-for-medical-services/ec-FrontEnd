import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <h1>Team Members</h1>
      <Link to="/">Go to the landing page</Link>
      <br />
      <Link to="/team">Meet the team</Link>
    </>
  );
};

export default Home;
