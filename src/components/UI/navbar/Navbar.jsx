import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GreenButton from "./../button/GreenButton";
import { AuthContext } from "./../../../context/index";

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <div className="navbar">
      <GreenButton style={{ marginLeft: 20 }} onClick={() => logout()}>
        Log out
      </GreenButton>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        {/* <Link to="/register">Registration</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
