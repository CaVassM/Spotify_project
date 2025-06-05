
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SeachResults/SearchResults'
import { Playlist } from '../Playlist/Playlist'
import './App.css'
import { useState } from 'react'
import { Track } from '../Track/Track'

function App() {

  // Tenemos el searchProp. Procedemos ahora con mandarlo al searchResults
  // Solo se mandara cuando se aprieta el boton de Search.
  // Vaya, parece que se tendra que mandar desde aca el metodo.
  // Pero tiene sentido, asi que como teoria queda:
  // Compartir events SIEMPRE desde el mismo padre.
  const [playlistSongs, setPlaylistSongs] = useState([]);
  // Se llama un callback vacio para que no ejecute nada.
  const addTrackToPlaylist = (track) => {
     if (!playlistSongs.find(t => t.id === track.id)) {
      setPlaylistSongs(prev => [...prev, track]);
    }
  };

  const deleteTrackToPlaylist = (trackId) => {
    setPlaylistSongs(playlistSongs.filter(song => song.id !== trackId));
  }

  return (
    <>
      {/* Tendremos cabecera ydos columnas.
          La primera columna son los resultados de una busqueda de musicas */}
      <div className="App">
        {/* Se va expandiendo la imagen mientras mas colocamos */}
        <h1 className="highlight">Ja<span className="highlight">mmm</span>ing!</h1>
          {/* Crearemos un text bar de tal manera que pueda realizar busquedas. 
              Esto se obtiene por el compoennte searchBar */}
          <SearchBar onSelect = {addTrackToPlaylist} onDelete={deleteTrackToPlaylist}/>
          {/* Tambien debemos de mostrar el apartado de Playlist */}
          <div className='App-playlist'>
            <Playlist playlist = {playlistSongs} onSelect = {addTrackToPlaylist} onDelete={deleteTrackToPlaylist}/> 
          </div>
          
          
      </div>
    </>
  )
}

export default App
