import "./Albums.style.scss";
import { useEffect, useState } from "react";

const Albums = () => {
  const [allAlbums, setAllAlbums] = useState([]);

  const handleGetAlbums = async () => {
    const URL = `https://theaudiodb.com/api/v1/json/2/discography.php?s=${localStorage.lastSearch}`;
    const response = await fetch(URL);
    const result = await response.json();
    setAllAlbums(result.album);
  };

  useEffect(() => {
    handleGetAlbums();
  }, []);

  return (
    <div className="albums-container">
      <h2 className="albums-title">Albumes</h2>

      {allAlbums && (
        <ul className="album-list">
          {allAlbums.map(({ strAlbum, intYearReleased }, index) => (
            <li className="album-list-item" key={index}>
              {strAlbum}
              <span>{intYearReleased}</span>
            </li>
          ))}
        </ul>
      )}
      {!allAlbums && (
        <p className="error-message">
          Lo sentimos, pero no pudimos encontrar los álbumes de esta banda o artista
        </p>
      )}
    </div>
  );
};

export default Albums;
