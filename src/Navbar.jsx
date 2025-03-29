import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Добавляем эффект для отслеживания прокрутки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-900/90 backdrop-blur-sm shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      {/* Дополнительный темный оверлей для тени */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="./png/logo1.png" alt="Rebel Rover" className="z-10" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-18">
          <div className="pr-30 relative group">
            <a
              href="/"
              className="text-white font-medium hover:text-blue-200 transition-colors"
            >
              Home
            </a>
          </div>
          <div className="relative group">
            <a
              href="/packages"
              className="text-white font-medium flex items-center hover:text-blue-200 transition-colors"
            >
              Package{" "}
              <span className="ml-1">
                <img src="./svg/vector1.svg" />
              </span>
            </a>
          </div>
          <div className="relative group">
            <a
              href="/destinations"
              className="text-white font-medium flex items-center hover:text-blue-200 transition-colors"
            >
              Destination{" "}
              <span className="ml-1">
                <img src="./svg/vector1.svg" />
              </span>
            </a>
          </div>
          <div className="relative group">
            <a
              href="/blog"
              className="text-white font-medium flex items-center hover:text-blue-200 transition-colors"
            >
              Blog{" "}
              <span className="ml-1">
                <img src="./svg/vector1.svg" />
              </span>
            </a>
          </div>
          <a
            href="/contact"
            className="text-white font-medium hover:text-blue-200 transition-colors z-10"
          >
            Contact
          </a>
          <button className="text-white p-2 hover:text-blue-200 transition-colors">
            <img src="./svg/vector2.svg" className="relative z-10" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <img src="./svg/vector2.svg" className="relative z-10" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900/90 backdrop-blur-sm mt-2 py-2">
          <a href="/home" className="block text-white p-2 hover:bg-blue-800/50">
            Home
          </a>
          <a
            href="/packages"
            className="block text-white p-2 hover:bg-blue-800/50"
          >
            Package
          </a>
          <a
            href="/destinations"
            className="block text-white p-2 hover:bg-blue-800/50"
          >
            Destination
          </a>
          <a href="/blog" className="block text-white p-2 hover:bg-blue-800/50">
            Blog
          </a>
          <a
            href="/contact"
            className="block text-white p-2 hover:bg-blue-800/50"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
