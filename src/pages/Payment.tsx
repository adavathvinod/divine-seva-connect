import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/components/WhatsAppButton";
import { Shield, CheckCircle, Users, Phone, Copy, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UPI_ID = "srinivasttdseva@upi";

const trustPoints = [
  "250+ devotees have successfully booked through us",
  "Direct communication with Srinivas for all queries",
  "No hidden charges or surprise fees",
  "Complete transparency in ticket pricing",
  "Personal guidance throughout the process",
  "Refund support for cancelled bookings",
];

const testimonials = [
  {
    name: "Ramesh Babu",
    location: "Mumbai",
    text: "Booked Kalyanotsavam through Srinivas. The whole process was smooth and he kept us updated at every step.",
    amount: "₹7,500",
  },
  {
    name: "Sunitha Rani",
    location: "Vizag",
    text: "Got special darshan tickets for my parents. Very reliable service with zero issues.",
    amount: "₹1,200",
  },
  {
    name: "Kiran Kumar",
    location: "Delhi",
    text: "First time booking TTD seva online. Srinivas made it very easy and trustworthy.",
    amount: "₹5,000",
  },
];

const Payment = () => {
  const { toast } = useToast();

  const copyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    toast({
      title: "UPI ID Copied!",
      description: "You can now paste it in your payment app.",
    });
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-12 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Payment & Trust
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Secure payments via UPI. Your trust is our priority.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 temple-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Section */}
            <div>
              <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                    <QrCode className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Pay via UPI</h2>
                  <p className="text-muted-foreground mt-2">
                    Scan the QR code or use UPI ID for instant payment
                  </p>
                </div>

                {/* QR Code Placeholder */}
                <div className="bg-muted rounded-xl p-6 mb-6">
                  <div className="aspect-square max-w-[200px] mx-auto bg-white rounded-lg p-4 flex items-center justify-center border-2 border-dashed border-gold">
                    <div className="text-center">
                      <QrCode className="h-20 w-20 text-gold mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">
                        Scan to Pay
                      </p>
                    </div>
                  </div>
                </div>

                {/* UPI ID */}
                <div className="bg-gold/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">UPI ID</p>
                  <div className="flex items-center justify-between">
                    <code className="font-mono text-lg font-semibold text-gold-dark">
                      {UPI_ID}
                    </code>
                    <Button variant="ghost" size="sm" onClick={copyUPI}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </div>

                {/* Payment Steps */}
                <div className="space-y-3 text-sm">
                  <p className="font-medium text-foreground">How to Pay:</p>
                  <ol className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center text-xs flex-shrink-0">1</span>
                      <span>Open any UPI app (Google Pay, PhonePe, Paytm)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center text-xs flex-shrink-0">2</span>
                      <span>Scan QR code or enter UPI ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center text-xs flex-shrink-0">3</span>
                      <span>Enter amount as discussed with Srinivas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center text-xs flex-shrink-0">4</span>
                      <span>Share screenshot on WhatsApp for confirmation</span>
                    </li>
                  </ol>
                </div>

                <div className="mt-6">
                  <Button variant="whatsapp" className="w-full" onClick={openWhatsApp}>
                    <Phone className="h-4 w-4 mr-2" />
                    Confirm Payment on WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div>
              {/* Trust Banner */}
              <div className="bg-foreground rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                    <Users className="h-7 w-7 text-gold-light" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-gold-light">250+</h3>
                    <p className="text-primary-foreground/80">Happy Devotees</p>
                  </div>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Join hundreds of devotees who have trusted Srinivas TTD Seva Consultations 
                  for their Tirumala pilgrimage bookings.
                </p>
              </div>

              {/* Trust Points */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-green-600" />
                  <h3 className="font-serif text-xl font-bold text-foreground">Why Trust Us?</h3>
                </div>
                <ul className="space-y-3">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Bookings */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Recent Successful Bookings
                </h3>
                <div className="space-y-4">
                  {testimonials.map((item) => (
                    <div key={item.name} className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary-foreground">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-foreground text-sm">{item.name}</p>
                          <span className="text-xs text-green-600 font-medium">{item.amount}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.location}</p>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">"{item.text}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment;
