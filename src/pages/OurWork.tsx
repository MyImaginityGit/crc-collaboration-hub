import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Target, Users, Heart, ArrowRight } from "lucide-react";

const OurWork = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting research to real-world impact through strategic initiatives and collaborative partnerships
          </p>
        </div>

        {/* Mission Overview */}
        <section className="mb-16">
          <Card className="shadow-medium bg-gradient-subtle">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission in Action</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                CRC empowers individuals and organizations from grassroots communities to global platforms 
                by advancing workforce development, promoting cross-sector collaboration, and connecting 
                research to real-world impact.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Active Fundraiser */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Current Initiative</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-strong">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">
                    <a 
                      href="https://givebutter.com/cfrc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-fast inline-flex items-center"
                    >
                      CFRC-Cure for Rare Cancer
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </h3>
                  <span className="bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full">
                    Active Campaign
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Disseminate knowledge and spread awareness while advocating for research funding, 
                  clinical trials, and new therapeutics. Educate the next generation of scientists 
                  and support participation of researchers from underserved regions at HTLV2026, 
                  the first major U.S. conference on this virus in 23 years.
                </p>

                <div className="border-l-4 border-accent pl-6 mb-6">
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-primary">Campaign Leadership:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Led by{" "}
                    <a 
                      href="https://drexel.edu/medicine/faculty/profiles/pooja-jain/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      Dr. Pooja Jain
                    </a>
                    {" "}at{" "}
                    <a 
                      href="https://drexel.edu/medicine/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      Drexel University College of Medicine
                    </a>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="default" size="lg" asChild>
                    <a 
                      href="https://givebutter.com/cfrc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Support This Campaign <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a 
                      href="https://givebutter.com/cfrc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Learn More at DonateCFRC.org <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Workforce Development</h3>
                <p className="text-muted-foreground">
                  Building capacity and skills in research communities worldwide through 
                  education and training programs.
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
                  Supporting research initiatives through strategic fundraising efforts 
                  and grant writing assistance.
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
                  Raising awareness for rare diseases and education initiatives 
                  through targeted outreach programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="text-center">
          <Card className="bg-primary text-primary-foreground shadow-strong">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Together, we can bridge the gap between groundbreaking research and meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="https://www.donatecfrc.org" target="_blank" rel="noopener noreferrer">
                    Make a Donation
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="/get-involved">
                    Get Involved
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section> */}
      </div>
    </div>
  );
};

export default OurWork;