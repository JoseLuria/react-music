import "./NavBar.style.scss";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/mobile-menu-icon.svg";
import { Link } from "react-router-dom";

const menuLinks = [
  { name: "Inicio", href: "/" },
  { name: "Favoritos", href: "/favorites" },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    document.body.classList.toggle("no-scroll");
    setShowMenu(!showMenu);
  };

  const handleRemoveMenu = () => {
    if (window.innerWidth < 768) {
      document.body.classList.remove("no-scroll");
      setShowMenu(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link onClick={handleRemoveMenu} to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <button onClick={handleShowMenu} className="navbar-menu-button">
          <img src={MenuIcon} alt="Menu Icon" />
        </button>

        <div className={`menu-list-container ${showMenu && "menu-list-container-active"}`}>
          <ul className={`menu-list `}>
            {menuLinks.map(({ name, href }) => (
              <li key={name} onClick={handleRemoveMenu} className="menu-list-item">
                <Link to={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
