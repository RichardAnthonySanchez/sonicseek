import React, { useState, useEffect } from 'react';
import { getSimilarArtists } from './getSimilarArtists';

const ArtistForm = () => {
  const [artistName, setArtistName] = useState('');

  useEffect(() => {
    if (artistName) {
      getSimilarArtists(artistName);
    }
  }, [artistName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArtistName(e.target.elements.artist.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="artist" // Add the name attribute
        value={artistName}
        onChange={(e) => setArtistName(e.target.value)}
        placeholder="Enter artist name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArtistForm;