import Error from "../../components/Error/Error";
import { useSelector } from "react-redux";
import FavoriteBand from "../../components/FavoriteBand/FavoriteBand";

const Favorites = () => {
  const { favoritesList } = useSelector(({ favorites }) => favorites);

  return (
    <>
      {favoritesList.length > 0 &&
        favoritesList.map(({ id, name, image, description }) => (
          <FavoriteBand key={id} id={id} name={name} image={image} description={description} />
        ))}
      {favoritesList.length === 0 && (
        <Error
          message={
            "Ups parece que esto está vacío, agrega algún artista o banda a favoritos para verlo aquí"
          }
        />
      )}
    </>
  );
};

export default Favorites;
