import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishAppetizer from "@/assets/dish-appetizer.jpg";
import drinkCocktail from "@/assets/drink-cocktail.jpg";

const galleryImages = [
  { src: heroImage, alt: "Restaurant Interior" },
  { src: dishSteak, alt: "Wagyu Steak" },
  { src: dishPasta, alt: "Lobster Pasta" },
  { src: dishDessert, alt: "Chocolate Dessert" },
  { src: dishAppetizer, alt: "Bruschetta Appetizer" },
  { src: drinkCocktail, alt: "Signature Cocktail" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Visual Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Our <span className="italic text-accent">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${
                index === 0 ? "md:row-span-2" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-64 md:h-80"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent text-2xl">+</span>
                  </div>
                  <p className="font-body text-foreground text-sm uppercase tracking-wider">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elegant animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
