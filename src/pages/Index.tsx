import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/components/WhatsAppButton";
import TrustBanner from "@/components/TrustBanner";
import LiveStatus from "@/components/LiveStatus";
import heroImage from "@/assets/hero-tirumala.jpg";
import sevaKalyanotsavam from "@/assets/seva-kalyanotsavam.jpg";
import sevaDepalankara from "@/assets/seva-deepalankara.jpg";
import sevaSuprabhatam from "@/assets/seva-suprabhatam.jpg";

const features = [
  "Direct TTD Ticket Booking Assistance",
  "Seva & Darshan Slot Availability Check",
  "100% Transparent Process",
  "No Hidden Charges",
  "Personal Guidance from Srinivas",
];

const popularSevas = [
  {
    name: "Kalyanotsavam",
    image: sevaKalyanotsavam,
    description: "Divine wedding ceremony of Lord Venkateswara",
  },
  {
    name: "Sahasra Deepalankara",
    image: sevaDepalankara,
    description: "1000 lamps lit for the Lord's blessing",
  },
  {
    name: "Suprabhatam Seva",
    image: sevaSuprabhatam,
    description: "Early morning awakening of the Lord",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Hyderabad",
    text: "Srinivas helped us book Kalyanotsavam seva effortlessly. His guidance made our pilgrimage memorable!",
  },
  {
    name: "Lakshmi Devi",
    location: "Chennai",
    text: "Very trustworthy and helpful. Got our darshan tickets within 2 days. Highly recommended!",
  },
  {
    name: "Venkat Rao",
    location: "Bangalore",
    text: "Excellent service! No hassle, no hidden fees. Srinivas is a true helper for devotees.",
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Tirumala Hills"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-white/90 text-sm">Trusted by 250+ Devotees</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trusted Guide to{" "}
              <span className="text-gradient-gold bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent">
                Tirumala Darshan
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Garidepalli Srinivas helps you book TTD Sevas & Darshan with personal guidance, 
              complete transparency, and zero hassle.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button variant="hero" size="xl" onClick={openWhatsApp}>
                Book Your Seva Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/services">
                <Button variant="outline" size="xl" className="border-white/50 text-white hover:bg-white/10 hover:text-white">
                  View All Sevas
                </Button>
              </Link>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {features.slice(0, 3).map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Status Bar */}
      <LiveStatus />

      {/* Trust Banner */}
      <TrustBanner />

      {/* About Section */}
      <section className="py-16 md:py-24 temple-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-saffron font-medium text-sm uppercase tracking-wider">About Our Service</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Dedicated to Helping Devotees
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm Garidepalli Srinivas, and my mission is to make your Tirumala pilgrimage 
              smooth and blessed. With years of experience and direct connections, I help 
              devotees from all over India book their preferred sevas and darshan slots 
              without any hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elevated transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="font-medium text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sevas */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron font-medium text-sm uppercase tracking-wider">Divine Services</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Popular Sevas at Tirumala
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the divine blessings through these sacred sevas at the holy Tirumala temple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularSevas.map((seva) => (
              <div
                key={seva.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={seva.image}
                    alt={seva.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 font-serif text-xl font-bold text-white">
                    {seva.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{seva.description}</p>
                  <Button variant="outline-gold" className="w-full" onClick={openWhatsApp}>
                    Check Availability
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="gold" size="lg">
                View All Sevas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-saffron font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Devotees Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-xl p-6 shadow-soft border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Book Your Seva?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Connect with Srinivas now and let him guide you through the booking process. 
            Your spiritual journey begins with a simple message.
          </p>
          <Button
            variant="whatsapp"
            size="xl"
            onClick={openWhatsApp}
            className="shadow-elevated"
          >
            Chat on WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
