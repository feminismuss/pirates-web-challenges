export default function App() {
  const coaches = ["Felix", "Roland", "Klaus"];
  return <Greeting names={coaches} />;
}

function Greeting({ names }) {
  return <h1>Hello {names.includes("Roland") ? "coach" : "stranger"}</h1>;
}
