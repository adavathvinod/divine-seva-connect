import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { openWhatsApp } from "@/components/WhatsAppButton";
import { Upload, Shield, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sevaOptions = [
  "Kalyanotsavam",
  "Sahasra Deepalankara Seva",
  "Suprabhatam Seva",
  "Thomala Seva",
  "Archana Seva",
  "Special Entry Darshan",
  "VIP Darshan",
  "Other (Specify in message)",
];

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    seva: "",
    preferredDate: "",
    numberOfPersons: "",
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

    // Validate
    if (!formData.name || !formData.mobile || !formData.seva) {
      toast({
        title: "Please fill required fields",
        description: "Name, Mobile, and Seva selection are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create WhatsApp message with form data
    const message = `*New Seva Booking Request*
    
Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email || "Not provided"}
Seva: ${formData.seva}
Preferred Date: ${formData.preferredDate || "Flexible"}
Persons: ${formData.numberOfPersons || "1"}
Message: ${formData.message || "No additional message"}`;

    const whatsappUrl = `https://wa.me/917382806134?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Please send the pre-filled message to complete your booking request.",
    });

    setIsSubmitting(false);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-12 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Book Your Seva
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Submit your details and documents for TTD seva booking. All information is handled securely.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 temple-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-green-600" />
                <span>Secure Form</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>250+ Successful Bookings</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Quick Response</span>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-elevated border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Mobile */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile">
                      Mobile Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email */}
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

                  {/* Seva Selection */}
                  <div className="space-y-2">
                    <Label>
                      Select Seva <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.seva}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, seva: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a seva" />
                      </SelectTrigger>
                      <SelectContent>
                        {sevaOptions.map((seva) => (
                          <SelectItem key={seva} value={seva}>
                            {seva}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Number of Persons */}
                  <div className="space-y-2">
                    <Label htmlFor="numberOfPersons">Number of Persons</Label>
                    <Input
                      id="numberOfPersons"
                      name="numberOfPersons"
                      type="number"
                      min="1"
                      max="10"
                      placeholder="1"
                      value={formData.numberOfPersons}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any special requirements or questions..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Document Upload Note */}
                <div className="bg-saffron/10 rounded-xl p-4 border border-saffron/30">
                  <div className="flex items-start gap-3">
                    <Upload className="h-5 w-5 text-saffron mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Documents Required</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        After submitting this form, please share the following via WhatsApp:
                      </p>
                      <ul className="text-muted-foreground text-sm mt-2 space-y-1">
                        <li>• Aadhaar Card Copy (all persons)</li>
                        <li>• Office ID / Address Proof</li>
                        <li>• Passport Size Photo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Privacy Note */}
                <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted rounded-lg p-3">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <p>
                    <strong>Privacy Note:</strong> Your documents are used only for TTD official booking 
                    and are deleted after the process is complete. We never share your data with third parties.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit & Connect on WhatsApp"}
                </Button>
              </form>
            </div>

            {/* Alternative CTA */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Or connect directly:</p>
              <Button variant="whatsapp" size="lg" onClick={openWhatsApp}>
                Chat on WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
