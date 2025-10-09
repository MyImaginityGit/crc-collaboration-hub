import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useEmailJS } from "@/hooks/useEmailJS";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { sendEmail, isLoading, error } = useEmailJS();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state with dismissible toast
    const loadingToastId = toast.loading("Sending your message...");
    
    // Prepare the email data
    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };
    
    // Send email using EmailJS
    const success = await sendEmail(emailData);
    
    // Dismiss loading toast
    toast.dismiss(loadingToastId);
    
    if (success) {
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } else {
      toast.error(error || "Failed to send message. Please try again or contact us directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team to learn more about our work or discuss partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a 
                        href="mailto:info@researchncollab.org" 
                        className="text-muted-foreground hover:text-accent transition-fast"
                      >
                        info@researchncollab.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-gold-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Blue Bell, PA, USA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <Card className="bg-gradient-subtle shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  CResCo empowers individuals and organizations from grassroots communities to global 
                  platforms by advancing workforce development, promoting cross-sector collaboration, 
                  and connecting research to real-world impact.
                </p>
              </CardContent>
            </Card>

            {/* Current Campaign */}
            <Card className="bg-primary text-primary-foreground shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Support Our Current Campaign</h3>
                <p className="text-primary-foreground/90 mb-4">
                  CFRC-Cure for Rare Cancer: Supporting HTLV2026 conference and research initiatives.
                </p>
                <Button variant="secondary" asChild>
                  <a 
                    href="https://givebutter.com/cfrc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Learn More & Donate
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                * Required fields. Your message will be sent directly to our team via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;