import "./favoritesBand.style.scss";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/actions/favorites.actions";
import NotAvaliableImage from "../../assets/not-avalible.jpg";

const FavoriteBand = ({ id, name, image }) => {
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="favorite-band">
      <img
        className="favorite-band-image"
        src={image ? image : NotAvaliableImage}
        alt={`${name}`}
      />
      <div className="favorite-band-content">
        <h2 className="favorite-band-name">{name}</h2>
        <button onClick={handleRemoveFromFavorites} className="favorite-button">
          Quitar de Favoritos
        </button>
      </div>
    </div>
  );
};

export default FavoriteBand;
