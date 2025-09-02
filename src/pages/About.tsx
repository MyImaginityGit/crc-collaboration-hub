import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Lightbulb, Globe, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About CRC</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering research communities through collaboration and workforce development
          </p>
        </div>

        {/* Founded on Purpose */}
        <section className="mb-16">
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Founded on Purpose</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Center for Research & Collaboration (CRC) was born from a recognition that 
                groundbreaking research often emerges from the most unexpected places - grassroots 
                communities, underfunded labs; yet these discoveries frequently face steep barriers 
                in funding, visibility, and participation. Collaboration is CRC's cornerstone, 
                encouraging partnerships and accelerating progress.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why Research */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Why Research</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Inculcating a research mindset is one of the most powerful investments in shaping 
              a future that's curious, inclusive, and solution-oriented.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              "Builds critical thinking and problem-solving skills that apply across all fields",
              "Encourages evidence-based decision-making in personal and professional contexts",
              "Fosters innovation by teaching people to question assumptions and explore new possibilities",
              "Develops resilience and adaptability through the iterative process of hypothesis, testing, and refinement",
              "Cultivates empathy and global awareness by exposing individuals to diverse perspectives and challenges"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>

          <Card className="bg-secondary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Myth vs. Truth</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-destructive mb-2">Myth: Research is only for academics or people with advanced degrees.</p>
                  <p className="text-muted-foreground">
                    <strong className="text-accent">Truth:</strong> Research is a mindset and skill set that benefits everyone, 
                    from parents researching the best schools for their children to entrepreneurs 
                    understanding market needs.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-destructive mb-2">Myth: Research takes too long and doesn't lead to practical results.</p>
                  <p className="text-muted-foreground">
                    <strong className="text-accent">Truth:</strong> Research can be as simple as gathering information before 
                    making a decision, and it often saves time and resources in the long run by 
                    preventing costly mistakes.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-destructive mb-2">Myth: You need expensive equipment or resources to conduct meaningful research.</p>
                  <p className="text-muted-foreground">
                    <strong className="text-accent">Truth:</strong> Many impactful studies use observational methods, surveys, 
                    or community-based approaches that require minimal resources but yield valuable insights.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Collaboration */}
        <section>
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-gold-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Why Collaboration</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Collaboration is key because no single mind, discipline, or institution can solve 
              today's most complex challenges alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Diverse Perspectives",
                description: "Brings together different viewpoints, experiences, and expertise, leading to more comprehensive and innovative solutions."
              },
              {
                icon: Zap,
                title: "Resource Sharing",
                description: "Allows pooling of resources, knowledge, and tools, making ambitious projects feasible even for smaller organizations."
              },
              {
                icon: Target,
                title: "Accelerated Progress",
                description: "Speeds up the research and development process by dividing tasks and building on each other's work."
              },
              {
                icon: CheckCircle,
                title: "Quality Improvement",
                description: "Enhances the quality and credibility of research through peer review, cross-validation, and collective problem-solving."
              },
              {
                icon: Users,
                title: "Community Building",
                description: "Fosters networks and relationships that extend beyond individual projects, creating lasting partnerships and support systems."
              }
            ].map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;