import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import { SearchResults } from '../SeachResults/SearchResults'

// OnSaveText se encarga de capturar el value
export function SearchBar({ onSelect, onDelete }){
    // Aqui mostraremos un input no?
    const [search, setSearch] = useState(""); // Para que el valor del search aca si podemos manejarlo desde el del App.
    const [result, setResult] = useState("");
    const handleButton = () => {
        // El search se debe de mandar a otro componente.
        alert(search);
        setResult(search);
    };

    return (
        <>
            <div className='c'>
                <div className='SearchBar'>
                    <input
                    className="input"
                    onChange={(e) => {setSearch(e.target.value)}}
                    />
                </div>
                <button className='SearchButton' value={search} onClick={handleButton}>Search</button>
                {/* Recordemos que siempre debemos de colocar un label sumado con un input */}
            </div>
                {/* Hecho el searchBar, procedemos con renderizar otros divs */}
                <SearchResults result={result} onSelect = {onSelect} onDelete={onDelete}/>

        </>
    )
}