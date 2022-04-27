import "./BandCard.style.scss";
import ImageFilter from "../../assets/image-filter.png";
import NotAvalibleImage from "../../assets/not-avalible.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/favorites.actions";

const BandCard = ({ id, image, name, genre, description }) => {
  const dispatch = useDispatch();
  const { favoritesList } = useSelector(({ favorites }) => favorites);
  const isFavorite = favoritesList.find((artist) => artist.id === id);

  const handleAddToFavorites = () => {
    const newArtist = {
      id,
      image,
      name,
      description,
    };

    dispatch(addToFavorites(newArtist));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="band-card">
      <div className="band-image">
        <img className="band-image-cover" src={image ? image : NotAvalibleImage} alt={`${name}`} />
        <img className="band-image-filter" src={ImageFilter} alt="image filter" />
      </div>
      <section className="band-info-section">
        <div className="band-header">
          <h1 className="band-name">{name}</h1>
          <p className="band-genre">{genre ? genre : "Desconocido"}</p>
        </div>
        <p className="band-description">
          {description
            ? description
            : "La biografía de este artista o banda no está disponible por el momento."}
        </p>
        <button
          onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
          className="add-to-favorites-button"
        >
          {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        </button>
      </section>
    </div>
  );
};

export default BandCard;
