import "./SearchBar.style.scss";
import SearchIcon from "../../assets/search-icon.svg";

const SearchBar = ({ handleSearchBand, handleBandName }) => {
  return (
    <form className="search-bar" onSubmit={(e) => handleSearchBand(e)}>
      <input
        name="band"
        placeholder="Nombre de la banda o artista"
        className="search-bar-input"
        type="text"
        onChange={({ target }) => handleBandName(target)}
      />
      <button type="submit" className="search-bar-button">
        <img src={SearchIcon} alt="Search Icon" />
      </button>
    </form>
  );
};

export default SearchBar;
