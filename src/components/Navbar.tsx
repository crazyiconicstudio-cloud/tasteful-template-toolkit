import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center gap-2"
        >
          <span className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
            La <span className="text-accent">Maison</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`relative font-body text-sm uppercase tracking-widest transition-colors duration-300 hover:text-accent ${
                activeSection === link.href.replace("#", "")
                  ? "text-accent"
                  : "text-foreground/80"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant="gold"
          size="sm"
          className="hidden md:flex"
          onClick={() => scrollToSection("#contact")}
        >
          Book a Table
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`font-body text-base uppercase tracking-wider py-2 transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-accent"
                  : "text-foreground/80"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="gold"
            className="mt-4"
            onClick={() => scrollToSection("#contact")}
          >
            Book a Table
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
