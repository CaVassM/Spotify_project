import React, { useState } from "react";
import './SearchResults.css'
import { Tracklist } from "../TrackList/Tracklist";

export function SearchResults({ result, onSelect, onDelete}) {
  const trackList = [
    {
      id: '1',
      name: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'A Night at the Opera',
    },
    {
      id: '2',
      name: 'Billie Jean',
      artist: 'Michael Jackson',
      album: 'Thriller',
    },
    {
      id: '3',
      name: 'Shape of You',
      artist: 'Ed Sheeran',
      album: '÷ (Divide)',
    },
    {
      id: '4',
      name: 'Rolling in the Deep',
      artist: 'Adele',
      album: '21',
    },
    {
      id: '5',
      name: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      album: 'Nevermind',
    },
  ];

  // Buscar canciones solo si hay texto
  const songsResults = result ? trackList.filter(song =>
        song.artist.toLowerCase().includes(result.toLowerCase())
      )
    : [];

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* Ahora procedemos con emitir los resultados */}
      {songsResults.length > 0 ? <Tracklist tracks={songsResults} onSelect = {onSelect} onDelete = {onDelete}/> 
            : <h3>No hay resultados</h3> }
     
    </div>
  );
}
