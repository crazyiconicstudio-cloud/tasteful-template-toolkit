import { useState, useEffect, useRef } from "react";
import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishAppetizer from "@/assets/dish-appetizer.jpg";
import drinkCocktail from "@/assets/drink-cocktail.jpg";

const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"];

const menuItems = [
  {
    id: 1,
    name: "Truffle Bruschetta",
    description: "Fresh tomatoes, black truffle, aged balsamic, basil",
    price: "$24",
    category: "Starters",
    image: dishAppetizer,
  },
  {
    id: 2,
    name: "Wagyu Beef Tenderloin",
    description: "A5 Japanese Wagyu, red wine reduction, seasonal vegetables",
    price: "$95",
    category: "Main Course",
    image: dishSteak,
  },
  {
    id: 3,
    name: "Lobster Linguine",
    description: "Fresh Maine lobster, homemade pasta, saffron cream",
    price: "$78",
    category: "Main Course",
    image: dishPasta,
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description: "Valrhona dark chocolate, gold leaf, raspberry coulis",
    price: "$28",
    category: "Desserts",
    image: dishDessert,
  },
  {
    id: 5,
    name: "Golden Sunset",
    description: "Premium aged whiskey, honey, citrus, aromatic bitters",
    price: "$22",
    category: "Drinks",
    image: drinkCocktail,
  },
  {
    id: 6,
    name: "Foie Gras Terrine",
    description: "Duck liver, brioche, fig compote, port reduction",
    price: "$36",
    category: "Starters",
    image: dishAppetizer,
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Our Offerings
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Exquisite <span className="italic text-accent">Menu</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto" />
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 md:gap-6 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-body text-sm uppercase tracking-wider px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-card rounded-lg overflow-hidden hover-lift transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1 rounded-full font-body font-semibold">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="font-body text-xs text-accent uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-heading text-xl text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="font-body text-foreground/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
