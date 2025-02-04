import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="header-logo" />
      <p className="header__date-and-location">
        {currentDate},{weatherData.city}
      </p>

      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terence Tegenge</p>
        <img src={avatar} alt="Terrence" className="header_avatar" />
      </div>
    </header>
  );
}

export default Header;
