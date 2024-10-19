import { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './assets/Components/Navbar';

function App() {
  const [tracks, setTracks] = useState([]);
  const [keyword, setkeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false); // To track search activity
  const [currentAudio, setCurrentAudio] = useState(null); // To track currently playing audio

  // Fetch tracks with a limit of 10
  const getTracks = async () => {
    setIsSearching(keyword !== ""); // Set true if user has searched for a song
    let data = await fetch(`https://v1.nocodeapi.com/visheshpandey/spotify/dNxiRTREOhvTzsYn/search?q=${keyword === "" ? "trending" : keyword}&type=track&limit=12`);
    let convertedData = await data.json();
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items.slice(0, 12)); // Ensuring only 10 songs are set

    // Clear the search box after search
    setkeyword("");
  };

  useEffect(() => {
    // Fetch trending tracks on page load
    getTracks();
  }, []);

  // Function to handle song play
  const handlePlay = (e) => {
    // Pause the currently playing audio if it exists and is different from the new one
    if (currentAudio && currentAudio !== e.target) {
      currentAudio.pause();
      currentAudio.currentTime = 0; // Reset the previous audio to the beginning
    }

    // Set the new audio element as the current audio
    setCurrentAudio(e.target);
  };

  return (
    <>
      <div className="navbar">
        <Navbar getTracks={getTracks} setkeyword={setkeyword} keyword={keyword}></Navbar>
      </div>

      {/* Trending Section */}
      {!isSearching && <h1 className="trending-heading">Trending Songs</h1>}

      <div className='music-container'>
        <div className="col">
          {tracks.map((e) => {
            return (
              <div key={e.id} className="card-container">
                <div className="card w-10">
                  <img src={e.album.images[0].url} className='artist-img' width={250} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <p className="card-text">Artist: {e.artists[0].name}</p>
                    <p className="card-text">Release Date: {e.album.release_date}</p>
                    <audio src={e.preview_url} controls className='audio' onPlay={handlePlay}></audio>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Beat's Music App. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/adityapandey06" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Aditya06pandey1368" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
}

export default App;
