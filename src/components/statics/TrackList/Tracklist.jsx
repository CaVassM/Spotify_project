import React from "react";
import { useState } from "react";
import "./Tracklist.css"
import { Track } from "../Track/Track";


export function Tracklist({tracks, onSelect, onDelete}){
    // Tal vez necesite usar States. Esto pues, para capturar los IDS que terminan siendo marcados.
    // Crearemos un event
    const trackList = tracks.map(track => {
        return (
            <Track track={track} onSelect={onSelect} selected= {false} onDelete={onDelete}/>
        )
    })

    return (
        <div className="TrackList">
            {trackList}
        </div>
    )



}