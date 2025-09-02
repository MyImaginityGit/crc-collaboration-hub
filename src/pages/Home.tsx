import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-research-collaboration.jpg";
import conferenceImage from "@/assets/conference-collaboration.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Research for Solutions. Collaboration for Growth.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            CRC empowers individuals and organizations from grassroots communities to global platforms 
            by advancing workforce development, promoting cross-sector collaboration, and connecting 
            research to real-world impact.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-8">
            Advancing Today's Workforce. Elevating Tomorrow's Leaders.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/about">
                Our Mission <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#active-fundraisers">
                Support Our Work <Heart className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <p className="text-muted-foreground">Active Fundraiser</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">23</div>
              <p className="text-muted-foreground">Years Since Last Major Conference</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">2026</div>
              <p className="text-muted-foreground">HTLV Conference Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Fundraisers Section */}
      <section id="active-fundraisers" className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${conferenceImage})` }}
        ></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Active Fundraisers</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  <a 
                    href="https://www.donatecfrc.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-fast inline-flex items-center"
                  >
                    CRC-Cure for Rare Cancer
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Disseminate knowledge and spread awareness while advocating for research funding, 
                  clinical trials, and new therapeutics. Educate the next generation of scientists 
                  and support participation of researchers from underserved regions at HTLV2026, 
                  the first major U.S. conference on this virus in 23 years.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Led by{" "}
                  <a 
                    href="https://drexel.edu/medicine/faculty/profiles/pooja-jain/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Dr. Pooja Jain
                  </a>
                  {" "}at{" "}
                  <a 
                    href="https://drexel.edu/medicine/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Drexel University College of Medicine
                  </a>
                </p>
                <p className="text-sm">
                  <a 
                    href="https://www.donatecfrc.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center"
                  >
                    Learn more at DonateCFRC.org
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              To empower individuals and organizations through workforce development, 
              cross-sector collaboration, and connecting research to real-world impact. 
              We bridge the gap between grassroots innovation and global platforms.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Work Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Workforce Development</h3>
                <p className="text-muted-foreground">
                  Building capacity and skills in research communities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-gold-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fundraising Support</h3>
                <p className="text-muted-foreground">
                  Supporting research initiatives through strategic fundraising efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Awareness Campaigns</h3>
                <p className="text-muted-foreground">
                  Raising awareness for rare diseases and education initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;