import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <h1>Tunr Music App</h1>
      <h2>
        <Link to="/songs">Songs</Link>
      </h2>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
