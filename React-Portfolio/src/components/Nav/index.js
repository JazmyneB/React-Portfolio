import React from 'react';

function Nav() {

  return (
    <header>
  <nav>
    <a href="/" className="dev">
      Jazmyne Bradley
    </a>
    <a href="#about" className="mx-1 sect">About Me</a>
    <a href="#portfolio" className="mx-2 sect">Portfolio</a>
    <a href="#resume" className="mx-2 sect">Resume</a>
    <a href="#contact" className="mx-2 sect">Contact Me</a>
    {/* <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      <li className="mx-2">
        <span>Portfolio</span>
      </li>
      <li className="mx-2">
        <span>Resume</span>
      </li>
    </ul> */}
  </nav>
    </header>
  );
}

export default Nav;

