import React from "react";

function Header() {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Daisy UI</h1>
        <nav className="space-x-4">
          <a href="#home" className="text-lg font-semibold hover:text-gray-300">
            Home
          </a>
          <a
            href="#about"
            className="text-lg font-semibold hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-lg font-semibold hover:text-gray-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold hover:text-gray-300"
          >
            Contact
          </a>
        </nav>
        <button className="btn btn-secondary">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
