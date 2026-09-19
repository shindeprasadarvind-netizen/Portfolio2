import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={handleNavClick}
        >
          PS<span>.</span>
        </a>

        {/* Desktop Navigation */}

        <div className="navbar-links">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={
                activeSection === item.href.substring(1)
                  ? "active"
                  : ""
              }
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}

        </div>

        {/* Desktop Let's Talk */}

        <a
          href="#contact"
          className="navbar-button"
          onClick={handleNavClick}
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}

        <button
          className={`mobile-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={
              activeSection === item.href.substring(1)
                ? "active"
                : ""
            }
            onClick={handleNavClick}
          >
            {item.name}
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-talk-button"
          onClick={handleNavClick}
        >
          Let's Talk →
        </a>

      </div>
    </nav>
  );
}

export default Navbar;