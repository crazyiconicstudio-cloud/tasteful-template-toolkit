import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="font-heading text-3xl font-semibold text-foreground">
                La <span className="text-accent">Maison</span>
              </span>
            </a>
            <p className="font-body text-foreground/60 leading-relaxed mb-6 max-w-md">
              Experience the pinnacle of fine dining at La Maison. Where every
              dish tells a story and every moment becomes a cherished memory.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label={`Follow us on ${social.icon.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-body text-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">
              Opening Hours
            </h4>
            <ul className="space-y-3 font-body text-foreground/60">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-foreground">5PM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-foreground">5PM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">5PM - 10PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-foreground/50">
            © {currentYear} La Maison. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-sm text-foreground/50 hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-sm text-foreground/50 hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
