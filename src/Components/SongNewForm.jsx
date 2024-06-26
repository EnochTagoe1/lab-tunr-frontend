import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
  artist: "",
  album: "",
  time: "",
  is_favorite: false});


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

//   "id": 1,
// "name": "Tropical Legs",
// "artist": "Earl Klugh",
// "album": "Sunshine",
// "time": "3:44",
// "is_favorite": true

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
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          
          required
          value={song.artist}
          placeholder="artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="album"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          name="time"
          value={song.time}
          onChange={handleTextChange}
          placeholder="time"
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm;