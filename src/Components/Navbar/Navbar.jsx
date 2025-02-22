import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg"; // Original logo
import changeLogo from "../../assets/changeLogo.png"; // New logo
import logo1 from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("");
  const [textColor, setTextColor] = useState("text-light");
  const [logoSrc, setLogoSrc] = useState(logo); // Initial logo state
  const [logoWidth, setLogoWidth] = useState("250px");
  const [borderTop, setBorderTop] = useState("3px solid #3535DE");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavBackground("bg-white");
        setTextColor("text-dark");
        setLogoSrc(changeLogo);
        setBorderTop("3px solid white"); // Correct value for border-top
        setLogoWidth("210px"); // Change the width when scrolling past 400px
      } else {
        setNavBackground("");
        setTextColor("text-light");
        setLogoSrc(logo); // Revert to the original logo
        setLogoWidth("250px"); // Revert to the original logo width
        setBorderTop("3px solid #3535DE"); // Revert to the original border-top value
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar ${navBackground} fixed-top p-0 navbarmain`}
      style={{ borderTop: borderTop }}
    >
      <div className="container d-flex align-items-center justify-content-between p-0 pe-3">
        {isMobile ? (
          <>
            <img
              style={{ width: "135px", marginLeft: "-30px", marginTop: "-3px" }}
              src={logo1}
              alt="Logo"
              className="logo_img ps-3"
            />
            <button
              className="navbar-toggler bg-white"
              type="button"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </>
        ) : (
          <>
            <div className="navbar-nav d-flex flex-row align-items-center gap-3 ">
              <Link className={`nav-item nav-link ${textColor} active`} to="/">
                Home
              </Link>
              <div className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${textColor}`}
                  href="#"
                  id="navbarDropdownMenuLinkService"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Service
                </a>
                <div
                  className="dropdown-menu position-fixed "
                  aria-labelledby="navbarDropdownMenuLinkService"
                >
                  <Link className="dropdown-item" to="/design-development">
                    Design & Development
                  </Link>
                  <Link className="dropdown-item" to="/precision-manufacturing">
                    Precision Manufacturing
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${textColor}`}
                  href="#"
                  id="navbarDropdownMenuLinkProduct"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Product
                </a>
                <div
                  className="dropdown-menu position-fixed "
                  aria-labelledby="navbarDropdownMenuLinkProduct"
                >
                  <Link
                    className="dropdown-item"
                    to="/launch-recovery-delivery"
                  >
                    Launch & Recovery/Delivery
                  </Link>
                  <Link className="dropdown-item" to="/parachutes">
                    Parachutes
                  </Link>
                  <Link className="dropdown-item" to="/advance-manufacturing">
                    Advance Manufacturing
                  </Link>
                  <Link className="dropdown-item" to="/advance-composites">
                    Advance Composites
                  </Link>
                </div>
              </div>
            </div>
            <img
              style={{ width: logoWidth }}
              src={logoSrc}
              alt="Logo"
              className="logo_img centered-logo"
            />
            <div className="d-flex flex-row justify-content-end align-items-center gap-5 ">
              <Link className={`nav-item nav-link ${textColor}`} to="/career">
                Career
              </Link>
              <Link className={`nav-item nav-link ${textColor}`} to="/about-us">
                About Us
              </Link>
              <Link
                className={`nav-item nav-link ${textColor}`}
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <div className="mobile-menu mobail">
          <div className="navbar-nav d-flex flex-column align-items-start gap-3 ps-5">
            <Link className={`nav-item nav-link ${textColor}`} to="/">
              Home
            </Link>
            <div className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${textColor}`}
                href="#"
                id="navbarDropdownMenuLinkService"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Service
              </a>
              <div
                className="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLinkService"
              >
                <Link className="dropdown-item" to="/design-development">
                  Design & Development
                </Link>
                <Link className="dropdown-item" to="/precision-manufacturing">
                  Precision Manufacturing
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${textColor}`}
                href="#"
                id="navbarDropdownMenuLinkProduct"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Product
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLinkProduct"
              >
                <Link className="dropdown-item" to="/launch-recovery-delivery">
                  Launch & Recovery/Delivery
                </Link>
                <Link className="dropdown-item" to="/parachutes">
                  Parachutes
                </Link>
                <Link className="dropdown-item" to="/advance-manufacturing">
                  Advance Manufacturing
                </Link>
                <Link className="dropdown-item" to="/advance-composites">
                  Advance Composites
                </Link>
              </div>
            </div>
            <Link className={`nav-item nav-link ${textColor}`} to="/career">
              Career
            </Link>
            <Link className={`nav-item nav-link ${textColor}`} to="/about-us">
              About Us
            </Link>
            <Link className={`nav-item nav-link ${textColor}`} to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
