type TeamCardProps = {
  name: string;
  role: string;
  github: string;
  linkedin: string;
};

export default function TeamCard({
  name,
  role,
  github,
  linkedin,
}: TeamCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "10px",
        width: "200px",
      }}
    >
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        View GitHub
      </a>
      <br />
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        View LinkedIn
      </a>
    </div>
  );
}
