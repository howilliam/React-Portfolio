import { NavLink } from "react-router-dom";
import './style.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          William Ho
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }>
              <NavLink to="/project">Projects</NavLink>
            </li>
            <li className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;