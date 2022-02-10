import React from "react";

const LibrarySong = ({
  audioRef,
  song,
  setCurrentSong,
  isPlaying,
  songs,
  setSongs,
  id,
}) => {
  const songSelectHandler = async (e) => {
    await setCurrentSong(song);
    await setSongs(
      songs.map((song) => {
        if (song.id === id) {
          return {
            ...song,
            active: true,
          };
        } else {
          return {
            ...song,
            active: false,
          };
        }
      })
    );

    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`library__song ${song.active && `selected`}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt="" />
      <div className="song__description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
