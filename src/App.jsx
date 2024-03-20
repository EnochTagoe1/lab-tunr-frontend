import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Song from "./Components/Song";
import SongDetails from "./Components/SongDetails";
import Songs from "./Components/Songs";
import Home from "./Pages/Home";


const App = () => {
  // const [songs, setSongs] = useState([]);
const API=import.meta.env.VITE_BASE_URL;

// useEffect(() => {
// fetch(`${API}/songs`).then(res => res.json()).then(data => setSongs(data));
// }, []);
  return (<div>
    <Router>
      <NavBar/>
      
      <main> 
        <Routes>
        
        <Route path="/"element={<Home/>}/>
        <Route path="/song"element={<Song/>}/>
        <Route path="/songs"element={<Songs/>}/>
          <Route path="/songs/:id"element={<SongDetails/>}/>
         
        </Routes>

        <h1>
    Tunr Musical App
    </h1>
    {/* {songs.map((song) =>
    <div key={song.id}>
    <p>Song Name: {song.name}</p>
    <p>Song Artist: {song.artist}</p>
    <p>Song Album: {song.album}</p>
    <p>Song Time: {song.album}</p>
    <p>
        {song.is_favorite ? <span>⭐️</span> : null} 
      </p>
    </div>)}*/}
    
   </main> 
    </Router>
    </div>);
};

// id SERIAL PRIMARY KEY,
//  name TEXT NOT NULL,
//  artist TEXT NOT NULL,
//  album TEXT,
//  time TEXT,
//  is_favorite BOOLEAN


// // DEPENDENCIES
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // PAGES
// import Edit from "./Pages/Edit";
// import ErrorPage from "./Pages/ErrorPage";
// import Home from "./Pages/Home";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";

// // COMPONENTS
// import NavBar from "./Components/NavBar";

// function App() {
//   return (
//     //<div>Tunr Musical App</div>
//     <div className="App">
//       <Router>
//         <NavBar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/songs" element={<Index />} />
//             <Route path="/songs/new" element={<New />} />
//             <Route exact path="/songs/:id" element={<Show />} />
//             <Route path="/songs/:id/edit" element={<Edit />} />
//             <Route path="*" element={<ErrorPage />} />
//           </Routes>
//         </main>
//       </Router>
//     </div>
//   );
// };

export default App;
