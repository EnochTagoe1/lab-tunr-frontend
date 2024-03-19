import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from './Reviews'

const API = import.meta.env.VITE_BASE_URL;

function SongDetails() {
  const [song, setSong] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((response) => response.json())
      .then((data) => setSong(data))
      .catch((error) => console.error(error));
  }, [id]);

  function deleteSong() {
    fetch(`${API}/songs/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/songs`))
      .catch((error) => console.error(error));
  }

  return (
    <article>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name}
      </h3>
      <h5>
        <span>
          <a href={song.url}>{song.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.url}
      </h5>
      <h6>{song.category}</h6>
      <p>{song.description}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={deleteSong}>Delete</button>
        </div>
      </div>
      <Reviews />
    </article>
  );
}

export default SongDetails;