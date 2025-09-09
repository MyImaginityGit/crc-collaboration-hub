import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Get Involved</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our mission to connect research with real-world impact and build stronger communities
          </p>
        </div>

        {/* Support Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Support CResCo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Donate */}
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Make a Donation</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Support our current fundraising campaign for rare cancer research and 
                  help us advance critical scientific initiatives.
                </p>
                <div className="text-center">
                  <Button size="lg" variant="default" asChild>
                    <a 
                      href="https://givebutter.com/cfrc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Donate Now <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Spread Awareness */}
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-gold-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Spread Awareness</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Help us reach more people by sharing our mission and current campaigns 
                  with your networks and communities.
                </p>
                <div className="text-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a 
                      href="https://givebutter.com/cfrc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Share Our Campaign <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partnership & Volunteer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Partner */}
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Partner with Us</h3>
                <p className="text-muted-foreground mb-6">
                  Organizations and institutions can collaborate with CResCo to advance 
                  research initiatives and workforce development programs.
                </p>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Volunteer */}
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Volunteer</h3>
                <p className="text-muted-foreground mb-6">
                  Join our volunteer network to support events, outreach, and 
                  administrative tasks that help advance our mission.
                </p>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Campaign Spotlight */}
        <section className="mb-16">
          <Card className="bg-gradient-hero text-primary-foreground shadow-strong">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Current Campaign Spotlight</h2>
              <h3 className="text-2xl font-semibold mb-4">CFRC-Cure for Rare Cancer</h3>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
                Supporting HTLV2026 - the first major U.S. conference on this virus in 23 years. 
                Help us educate the next generation of scientists and support researchers from 
                underserved regions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a 
                    href="https://givebutter.com/cfrc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white text-primary border-2 border-white hover:bg-white/90 hover:text-primary shadow-lg animate-pulse" 
                  asChild
                >
                  <a 
                    href="https://givebutter.com/cfrc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Donate Today
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Stay Connected */}
        <section>
          <Card className="bg-secondary/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Stay Connected</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Want to stay updated on our latest initiatives and opportunities to get involved? 
                Reach out to us directly.
              </p>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;