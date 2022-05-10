import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./header.css";
import styled from "styled-components";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div id="header">
      <div id="burger">
        <Hamburger
          color={isOpen ? "#303c6c" : "#fbe8a6"}
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          size={100}
        />
      </div>
      <div id="menu">
        <Menu
          right
          customBurgerIcon={<div></div>}
          isOpen={isOpen}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <Link to="/">Home</Link>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
