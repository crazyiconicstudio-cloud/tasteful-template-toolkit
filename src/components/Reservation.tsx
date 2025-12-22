import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const Reservation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-accent" />
            <span className="font-body text-accent uppercase tracking-[0.3em] text-sm">
              Reserve
            </span>
            <div className="w-16 h-px bg-accent" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6">
            Book Your{" "}
            <span className="italic text-accent">Unforgettable</span>
            <br />
            Dining Experience
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-foreground/70 mb-10 max-w-xl mx-auto">
            Join us for an evening of exceptional cuisine, impeccable service,
            and an ambiance that transforms dinner into a cherished memory.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" onClick={scrollToContact}>
              Make a Reservation
            </Button>
            <Button
              variant="elegant"
              size="xl"
              onClick={() => (window.location.href = "tel:+1234567890")}
            >
              Call Us: (123) 456-7890
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
