import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { openWhatsApp } from "@/components/WhatsAppButton";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 73828 06134",
    href: "tel:+917382806134",
    description: "Available 9 AM - 9 PM IST",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 73828 06134",
    href: "https://wa.me/917382806134",
    description: "Quick responses guaranteed",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@srinivasttdseva.com",
    href: "mailto:contact@srinivasttdseva.com",
    description: "For detailed queries",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tirupati, Andhra Pradesh",
    href: "#map",
    description: "Serving devotees across India",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name and message are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const message = `*Contact Form Message*
    
Name: ${formData.name}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject || "General Inquiry"}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/917382806134?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message has been prepared. Please send it via WhatsApp.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-12 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch with Garidepalli Srinivas for any queries about TTD seva bookings
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 temple-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <span className="text-saffron font-medium text-sm uppercase tracking-wider">Get In Touch</span>
                <h2 className="font-serif text-3xl font-bold text-foreground mt-2 mb-4">
                  We're Here to Help
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about TTD sevas, darshan bookings, or need guidance for your 
                  Tirumala pilgrimage? Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="bg-card rounded-xl p-5 shadow-soft border border-border hover:shadow-elevated transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <item.icon className="h-5 w-5 text-gold-dark" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-gold-dark font-medium text-sm">{item.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-muted rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-saffron" />
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-medium text-foreground">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    * WhatsApp messages are monitored outside business hours for urgent queries
                  </p>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="mt-6">
                <Button variant="whatsapp" size="lg" className="w-full" onClick={openWhatsApp}>
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Quick Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Your Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16" id="map">
            <div className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.8!2d79.4!3d13.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQ4LjAiTiA3OcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="grayscale-[30%]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
