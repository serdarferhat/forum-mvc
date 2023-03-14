import React from "react";
import { Link } from "react-router-dom";

const Header = ({main}) => {
  return (
    <header id="header">
      <h1>FORUM</h1>{
        main ? <Link to={"/"} >Anasayfaya Dön</Link>
:  <Link to={"/add-post"} >Post Ekle</Link>    }
      
    </header>
  );
};

export default Header;
