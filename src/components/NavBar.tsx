import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/imagiflix.png";
import placeholderUser from "../assets/user.jpg";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import emitter from "../utils/eventEmitter";
import { EVENTS } from "../data/constants";

import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOnChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    emitter.emit(EVENTS.Search, searchInput);
    setSearchInput("");
  };

  return (
    <nav className="navbar absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
      <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
        <h1 className="hidden">Imagiflix</h1>
        <img src={logo} alt="Imagiflix" />
        <ul className="grid grid-flow-col gap-4">
          <li className="font-bold">Início</li>
          <li>
            <a href="#series"></a>Séries
          </li>
          <li>
            <a href="#movies"></a>Filmes
          </li>
        </ul>
      </div>

      <div className="justify-self-end flex justify-items-end items-center">
        <form className="relative w-64">
          <input
            className="w-full bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
            type="text"
            placeholder="Títulos, gente e gêneros"
            onChange={(e) => handleOnChange(e)}
            value={searchInput}
          />
          <button
            className="search absolute right-0 py-1 px-2"
            onClick={(e) => handleSearchSubmit(e)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="relative flex ml-4">
          <img
            className="hover:cursor-pointer"
            src={placeholderUser}
            alt="Foto do usuário"
            onClick={handleClick}
          />
          <button onClick={handleClick}>
            <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
          </button>
          <ul
            className={`absolute mt-10 top-0 right-0 w-32 bg-black rounded p-4 transition-all duration-500 ease-in-out ${
              !isMenuOpen && "opacity-0 invisible"
            }`}
          >
            <li>
              <a href="#account" onClick={handleClick}>
                Minha conta
              </a>
            </li>
            <li>
              <a href="#logout" onClick={handleClick}>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
