import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Fitness Street, Gym District",
      subcontent: "Downtown, City 12345"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subcontent: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@sardula-gym.com",
      subcontent: "We reply within 24h"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 5:00 AM - 11:00 PM",
      subcontent: "Sat-Sun: 6:00 AM - 10:00 PM"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your fitness journey? Have questions about our programs? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="card-energy text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subcontent}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 bg-gym-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-background border-border resize-none"
                    placeholder="Tell us about your fitness goals or ask any questions..."
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Placeholder & Additional Info */}
            <div>
              <div className="bg-card rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Find Us</h3>
                
                {/* Map Placeholder */}
                <div className="bg-muted rounded-lg h-64 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">123 Fitness Street, Downtown</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Parking</h4>
                    <p className="text-sm text-muted-foreground">
                      Free parking available for all members and visitors. 
                      Additional street parking nearby.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Public Transport</h4>
                    <p className="text-sm text-muted-foreground">
                      Bus stops #12 and #34 are within 2 minutes walk. 
                      Metro station is 5 minutes away.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Contact</h4>
                    <p className="text-sm text-muted-foreground">
                      For urgent matters outside business hours, 
                      call our emergency line: +1 (555) 999-HELP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Access */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-energy text-left">
              <h4 className="font-semibold mb-2">What are your membership options?</h4>
              <p className="text-sm text-muted-foreground">
                We offer flexible monthly, quarterly, and annual memberships with 
                various access levels to fit your needs and budget.
              </p>
            </div>
            <div className="card-energy text-left">
              <h4 className="font-semibold mb-2">Do you offer free trials?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! We offer a complimentary consultation and gym tour for 
                all new members to experience Sardula Gym firsthand.
              </p>
            </div>
            <div className="card-energy text-left">
              <h4 className="font-semibold mb-2">What equipment do you have?</h4>
              <p className="text-sm text-muted-foreground">
                State-of-the-art cardio machines, free weights, resistance 
                equipment, functional training areas, and specialized class studios.
              </p>
            </div>
            <div className="card-energy text-left">
              <h4 className="font-semibold mb-2">Are personal trainers available?</h4>
              <p className="text-sm text-muted-foreground">
                Absolutely! Our certified personal trainers are available 
                for one-on-one sessions, small groups, and specialized programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;