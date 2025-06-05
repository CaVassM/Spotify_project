import React, { useState } from "react";
import './Playlist.css'
import { Track } from "../Track/Track";

export function Playlist({ playlist, onSelect, onDelete}){
    // Mantendremos un State de Input para que se pueda crear una playlist.
    // Ahora convertimos todos en tracks.
    const [title,setTitle] = useState("");

    const tracks = playlist.map((song) => {
        return (
            <Track track={song} onSelect={onSelect} selected={true} onDelete={onDelete}/>
        )
    });

    const handleInput = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (tracks) => {
        // Aqui tenemos que mandar todos los tracks a la api de Spotify.

    };
    return (
        <div className="Playlist">
            <h2>Playlist</h2>
            <input className="input" onChange={handleInput}/>
                {tracks}
            <button className="Playlist-save" onClick={() => handleSubmit(tracks)}>Save to Spotify</button>
        </div>
    )
}