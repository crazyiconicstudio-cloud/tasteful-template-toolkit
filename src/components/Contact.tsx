import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Gourmet Avenue, Fine Dining District, NYC 10001",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "(123) 456-7890",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "reservations@lamaison.com",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Mon-Sun: 5:00 PM - 11:00 PM",
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Sent!",
      description:
        "We'll confirm your booking within 24 hours. Thank you for choosing La Maison.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
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
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Contact & <span className="italic text-accent">Reservations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info & Map */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <info.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="font-body text-sm text-foreground/60">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 rounded-lg overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986773952479!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1639988888888"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Restaurant Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Reservation Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="bg-card p-8 md:p-10 rounded-lg border border-border/50">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                Reserve Your Table
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-foreground/70 mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground/70 mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Guests */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-foreground/70 mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground/70 mb-2 block">
                      Number of Guests *
                    </label>
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    >
                      <option value="">Select guests</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="8+">8+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-foreground/70 mb-2 block">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground/70 mb-2 block">
                      Preferred Time *
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    >
                      <option value="">Select time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-sm text-foreground/70 mb-2 block">
                    Special Requests
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                    placeholder="Any dietary requirements, special occasions, or seating preferences..."
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Confirm Reservation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
