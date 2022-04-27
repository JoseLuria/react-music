import "./Layout.style.scss";
import NavBar from "../components/NavBar/NavBar";
import GithubIcon from "../assets/github-icon.svg";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="layout-main">{children}</main>
      <a
        className="github-float-button"
        href="https://github.com/JoseLuria/react-music"
        target="_blank"
      >
        <img src={GithubIcon} alt="Github Icon" />
      </a>
    </div>
  );
};

export default Layout;
