import { useEffect, useRef, useState } from "react";
import chefImage from "@/assets/chef.jpg";

const About = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={chefImage}
                  alt="Our Head Chef"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-lg -z-10" />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-elegant">
                <p className="font-heading text-4xl text-accent font-bold">
                  25+
                </p>
                <p className="font-body text-sm text-primary-foreground uppercase tracking-wider">
                  Years of
                  <br />
                  Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Section Label */}
            <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-4">
              Our Story
            </p>

            {/* Heading */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              A Legacy of{" "}
              <span className="italic text-accent">Culinary</span> Excellence
            </h2>

            {/* Decorative Line */}
            <div className="w-20 h-1 bg-gradient-gold mb-8" />

            {/* Description */}
            <p className="font-body text-foreground/70 text-lg leading-relaxed mb-6">
              Founded in 1998, La Maison has been a beacon of fine dining in the
              heart of the city. Our philosophy is simple: source the finest
              ingredients, prepare them with passion, and serve them with
              impeccable attention to detail.
            </p>

            <p className="font-body text-foreground/70 text-lg leading-relaxed mb-8">
              Our award-winning Executive Chef, with over two decades of
              experience in Michelin-starred establishments across Europe,
              brings a unique fusion of classic techniques and innovative
              flavors to every dish.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "50+", label: "Signature Dishes" },
                { number: "15", label: "Expert Chefs" },
                { number: "3", label: "Michelin Stars" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="font-heading text-3xl md:text-4xl text-accent font-bold">
                    {stat.number}
                  </p>
                  <p className="font-body text-sm text-foreground/60 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
