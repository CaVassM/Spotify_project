
import React from "react";
import './Track.css'

export function Track({ track, onSelect, selected, onDelete}){
    // Ahora, ese onClick al track action claramente debe de estar añadiendo cosas a una lista de la playlist.
    // Será un array. Este se va a estar modificando concurridmente.
    // Por lo que veo, creo se puede solo pasar el track entero.
    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist + " | " + track.album}</p>
            </div>
            {!selected ? <button className="Track-action" onClick={() => onSelect(track)}>+</button>
            : <button className="Track-action" onClick={() => onDelete(track.id)}>-</button>}
            
        </div>
    )

}