import { Target, Users, Trophy, Heart } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Focus",
      description:
        "We help you stay focused on your fitness goals with personalized training programs.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Join a supportive community of fitness enthusiasts who motivate each other.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from equipment to training.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our passion for fitness drives us to help you achieve your best self.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                About <span className="text-gradient-modern">Sardula</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Founded in 2020, Sardula Gym has redefined fitness excellence.
                We believe transformation begins with mindset, supported by
                world-class facilities and expert guidance in an inspiring
                environment.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center card-modern">
                  <div className="text-4xl font-bold text-gradient-modern mb-3">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Members
                  </div>
                </div>
                <div className="text-center card-modern">
                  <div className="text-4xl font-bold text-gradient-modern mb-3">
                    3
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Years Strong
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={gymInterior}
                alt="Sardula Gym Interior"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 section-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient-modern">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide our approach to fitness and
              community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-modern text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Our <span className="text-gradient-modern">Story</span>
          </h2>
          <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
            <p>
              Sardula Gym emerged from a vision to revolutionize fitness. Our
              founders, seasoned athletes and wellness experts, recognized the
              need for a space that transcends traditional gym experiences.
            </p>
            <p>
              We've cultivated more than a fitness facility – we've built a
              ecosystem of transformation. Our certified professionals, premium
              equipment, and innovative programs create an environment where
              potential becomes reality.
            </p>
            <p>
              Today, Sardula stands as a beacon of excellence in fitness, where
              every member's journey is supported by expertise, innovation, and
              community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
