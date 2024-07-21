import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/home/signin")
  }
  return (
    <header className="text-white bg-purple-50 flex justify-between items-center p-4">
      <div className="flex items-center ml-32">
        <img src={logo} alt="Logo" className="h-12 w-18" />
      </div>
      <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 mr-28 rounded-lg">
        Sign-in
      </button>
    </header>
  );
};

export default Header;
