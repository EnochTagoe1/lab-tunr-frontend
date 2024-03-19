import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
    description: "",
  });

  // Add a song. Redirect to the index view.
  const addSong = () => {
    fetch(`${API}/songs`, {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/songs`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={song.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={song.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={song.description || ""}
          onChange={handleTextChange}
          placeholder="Describe why you selected this song"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm;