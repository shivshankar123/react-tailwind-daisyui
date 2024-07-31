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

          <details className="dropdown">
            <summary className="btn btn-secondary">Register</summary>
            <ul className="menu dropdown-content bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 rounded-lg z-[1] w-52 p-0 shadow-lg">
              <li>
                <a>Sign Up</a>
              </li>
              <li>
                <a>Sign In</a>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </header>
  );
}

export default Header;
