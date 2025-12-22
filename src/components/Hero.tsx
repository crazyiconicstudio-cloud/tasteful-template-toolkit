import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
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
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-accent/30 rotate-45 animate-float opacity-20" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Tagline */}
        <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-6 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          Established 1998
        </p>

        {/* Main Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground leading-tight mb-6 animate-fade-up opacity-0 [animation-fill-mode:forwards] delay-200">
          Experience{" "}
          <span className="italic text-accent">Fine Dining</span>
          <br />
          Like Never Before
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 [animation-fill-mode:forwards] delay-300">
          Where culinary artistry meets timeless elegance. Indulge in an
          unforgettable gastronomic journey crafted by world-renowned chefs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0 [animation-fill-mode:forwards] delay-400">
          <Button
            variant="gold"
            size="xl"
            onClick={() => scrollToSection("#menu")}
          >
            View Our Menu
          </Button>
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection("#contact")}
          >
            Reserve Your Table
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-foreground/50 hover:text-accent transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
