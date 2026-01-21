import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/components/WhatsAppButton";
import { Clock, Users, IndianRupee, CheckCircle } from "lucide-react";
import sevaKalyanotsavam from "@/assets/seva-kalyanotsavam.jpg";
import sevaDepalankara from "@/assets/seva-deepalankara.jpg";
import sevaSuprabhatam from "@/assets/seva-suprabhatam.jpg";
import sevaThomala from "@/assets/seva-thomala.jpg";

const sevas = [
  {
    id: 1,
    name: "Kalyanotsavam",
    image: sevaKalyanotsavam,
    description: "Witness the divine celestial wedding ceremony of Lord Venkateswara and Goddess Padmavathi. This is one of the most auspicious sevas performed at Tirumala.",
    duration: "2-3 hours",
    participants: "4 persons",
    price: "Contact for pricing",
    features: ["Direct Darshan", "Prasadam", "Photo with Deity", "Priority Entry"],
  },
  {
    id: 2,
    name: "Sahasra Deepalankara Seva",
    image: sevaDepalankara,
    description: "Experience the divine sight of 1000 oil lamps illuminating the sanctum sanctorum. This mesmerizing seva brings immense blessings and peace.",
    duration: "1-2 hours",
    participants: "2 persons",
    price: "Contact for pricing",
    features: ["Close Darshan", "Prasadam", "Evening Slot", "Spiritual Bliss"],
  },
  {
    id: 3,
    name: "Suprabhatam Seva",
    image: sevaSuprabhatam,
    description: "Wake up the Lord with divine hymns at 3:00 AM. This early morning seva is highly revered and grants special blessings to devotees.",
    duration: "1 hour",
    participants: "2 persons",
    price: "Contact for pricing",
    features: ["Early Morning", "First Darshan", "Prasadam", "Sacred Experience"],
  },
  {
    id: 4,
    name: "Thomala Seva",
    image: sevaThomala,
    description: "Offer fresh flower garlands to Lord Venkateswara. This seva allows devotees to participate in the daily floral decoration of the deity.",
    duration: "45 mins",
    participants: "2 persons",
    price: "Contact for pricing",
    features: ["Flower Offering", "Close View", "Prasadam", "Evening Time"],
  },
  {
    id: 5,
    name: "Archana Seva",
    image: sevaSuprabhatam,
    description: "Personal archana (prayer) performed by temple priests with your name and gothram. Receive divine blessings directly.",
    duration: "30 mins",
    participants: "6 persons",
    price: "Contact for pricing",
    features: ["Personal Prayer", "Name Recitation", "Prasadam", "Quick Seva"],
  },
  {
    id: 6,
    name: "Special Entry Darshan",
    image: sevaKalyanotsavam,
    description: "Skip the long queues with special entry darshan tickets. Ideal for elderly devotees and those with limited time.",
    duration: "1-2 hours",
    participants: "Per Person",
    price: "₹300 per person",
    features: ["Priority Entry", "Shorter Wait", "All Age Groups", "Daily Available"],
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            TTD Sevas & Darshan
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Explore our comprehensive list of sevas and darshan options available at Tirumala Temple. 
            Contact us for availability and booking assistance.
          </p>
        </div>
      </section>

      {/* Sevas Grid */}
      <section className="py-16 md:py-24 temple-pattern">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sevas.map((seva) => (
              <div
                key={seva.id}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={seva.image}
                    alt={seva.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 font-serif text-xl font-bold text-white">
                    {seva.name}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {seva.description}
                  </p>

                  {/* Meta Info */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{seva.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{seva.participants}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gold-dark font-medium">
                      <IndianRupee className="h-3 w-3" />
                      <span>{seva.price.includes("₹") ? seva.price.replace("₹", "") : "Ask"}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {seva.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gold/10 text-gold-dark text-xs rounded-full"
                      >
                        <CheckCircle className="h-3 w-3" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="gold" className="w-full" onClick={openWhatsApp}>
                    Check Availability
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Can't Find Your Preferred Seva?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact Srinivas directly for personalized assistance with any TTD seva or darshan booking.
          </p>
          <Button variant="saffron" size="lg" onClick={openWhatsApp}>
            Ask About Other Sevas
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
