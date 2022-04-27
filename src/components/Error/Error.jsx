import "./Error.style.scss";
import ErrorIcon from "../../assets/error-icon.svg";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <img className="error-logo" src={ErrorIcon} alt="Error Icon" />
      <p className="error-message">{message}</p>
    </div>
  );
};

export default Error;
