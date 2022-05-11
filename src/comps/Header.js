import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./header.css";
import { House, Bag, AddressBook } from "phosphor-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div id="header">
      <div id="header-logo">g.e.</div>
      <div id="burger">
        <Hamburger
          color={!isOpen ? "var(--red)" : "var(--blue)"}
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          size={100}
        />
      </div>

      <Menu
        customBurgerIcon={<div></div>}
        isOpen={isOpen}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <Link to="/">
          <House size={32} weight="fill" />
          Home
        </Link>
        <Link to="/work">
          <Bag size={32} weight="fill" />
          Work
        </Link>
        <Link to="/work">
          <AddressBook size={32} weight="fill" />
          Contact
        </Link>
      </Menu>
    </div>
  );
};

export default Header;
