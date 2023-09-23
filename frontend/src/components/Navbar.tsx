import React, { useState, useEffect } from "react";
import logo from "./../assets/logo_clinic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar :React.FC= () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isVisible, setNavbar]= useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const handletoggle =()=> {
             
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleClick = () => {
    setNavbar(prevState => !prevState);

  };

  const isBackgroundWhite = scrollY > 100;

  return (
    <header
      className={`nav ${isBackgroundWhite ? "background-white" : "back"}`}
    >
      <h1>
        <img src={logo} alt="" className="logo" /> ClinicManage.
      </h1>

      <div className="bars navbar-toggler">
        <FontAwesomeIcon
        onClick={handleToggleClick}
          icon={faBars}
          className="text-right navbar-toggler d-block d-lg-none"
          id="bars"
        />
      </div>

      <nav className={`n ${isVisible ? "visible1" : "invisible1 d-block"}`}>
        <ul className="text-center">
          <li>
            {" "}
            <h1 className="h1 active">Accueil</h1>
          </li>
          <li>
            <h1 className="h1">Qui sommes nous</h1>
          </li>
          <li>
            {" "}
            <h1 className="h1">Nos Services</h1>
          </li>
          <li>
            {" "}
            <h1 className="h1">S ' inscrire</h1>
          </li>
          
        </ul>

        <div className="d-block d-lg-none border"></div>
        <p className="texte  text-center d-block d-lg-none">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nemo porro maiores aperiam. Consequatur aut a alias. Quia maxime hic eaque error, tenetur fugiat exercitationem </p>
      </nav>
    </header>
  );
};

export default Navbar;
