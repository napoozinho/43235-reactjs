import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="page-padding">
          <div className="navbar-layout">
            <a href="/">
              <img
                className="home-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="home-icon"
              />
            </a>
            <div className="navbar-links-wrapper">
              <a href="/">Products</a>
              <a href="/">Contact</a>
              <a href="/">About</a>
            </div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
