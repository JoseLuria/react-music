import { useState, useEffect } from "react";
import { handleFormatText } from "../../utils/handleFormatText";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loading/Loading";
import BandCard from "../../components/BandCard/BandCard";
import Albums from "../../components/Albums/Albums";
import Error from "../../components/Error/Error";

const Home = () => {
  const [bandName, setBandName] = useState(
    localStorage.lastSearch ? localStorage.lastSearch : "coldplay",
  );
  const [bandData, setBandData] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const handleBandName = (target) => {
    const formattedText = handleFormatText(target);
    setBandName(formattedText);
  };

  const handleSearchBand = async (e) => {
    e && e.preventDefault();

    if (bandName.length > 0) {
      localStorage.lastSearch = bandName;
      setBandData({});
      if (e) {
        e.target.band.value = "";
      }
      setShowLoader(true);
      const URL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${bandName}`;
      const response = await fetch(URL);
      const result = await response.json();
      setBandName("");
      setShowLoader(false);
      setBandData(result.artists[0]);
    }
  };

  useEffect(() => {
    if (!localStorage.lastSearch) {
      localStorage.setItem("lastSearch", "coldplay");
    }
    handleSearchBand();
  }, []);

  const { idArtist, strArtist, strGenre, strBiographyES, strArtistThumb } = bandData;

  return (
    <>
      <SearchBar handleSearchBand={handleSearchBand} handleBandName={handleBandName} />
      {idArtist && (
        <>
          <BandCard
            id={idArtist}
            image={strArtistThumb}
            name={strArtist}
            genre={strGenre}
            description={strBiographyES}
          />
          <Albums />
        </>
      )}
      {showLoader && <Loading />}
      {!idArtist && !showLoader && (
        <Error
          message={"Lo sentimos, no pudimos encontrar el artista o banda que acabas de buscar"}
        />
      )}
    </>
  );
};

export default Home;
