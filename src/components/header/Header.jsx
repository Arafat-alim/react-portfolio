import React, { useState } from "react";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">NeckReact</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/930/930237.png"
              alt="X"
              className="menu-icon"
            />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
