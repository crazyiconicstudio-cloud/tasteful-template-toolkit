import { useEffect, useRef, useState } from "react";
import { Leaf, ChefHat, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "Locally sourced, organic produce delivered daily from trusted farms.",
  },
  {
    icon: ChefHat,
    title: "Master Chefs",
    description:
      "Award-winning culinary artists with decades of international experience.",
  },
  {
    icon: Shield,
    title: "Hygienic Kitchen",
    description:
      "Certified 5-star hygiene standards with regular health inspections.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description:
      "Impeccable service ensuring your dining experience is seamless.",
  },
];

const Features = () => {
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
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Our <span className="italic text-accent">Promise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group text-center p-8 bg-card rounded-lg border border-border/50 hover:border-accent/50 hover-lift transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <feature.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
