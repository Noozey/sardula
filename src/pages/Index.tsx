import { ArrowRight, Dumbbell, Users, Trophy, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gymHero from "@/assets/gym-hero.jpg";
import groupTraining from "@/assets/group-training.jpg";
import personalTraining from "@/assets/personal-training.jpg";

const Index = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase power with our comprehensive strength programs.",
      image: personalTraining
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join motivating group fitness classes that make working out fun and social.",
      image: groupTraining
    },
    {
      icon: Trophy,
      title: "Personal Training",
      description: "Get personalized coaching tailored to your specific goals and fitness level.",
      image: personalTraining
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Train on your schedule with our extended hours and 24/7 member access.",
      image: groupTraining
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "15+", label: "Expert Trainers" },
    { number: "50+", label: "Equipment Pieces" },
    { number: "24/7", label: "Access Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${gymHero})` }}
      >
        <div className="absolute inset-0 hero-modern"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Elevate Your <span className="text-gradient-modern">Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience elite fitness at Sardula Gym. Where cutting-edge equipment meets 
              expert guidance in a space designed for transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="btn-primary text-lg px-10 py-5">
                Begin Your Journey
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary text-lg px-10 py-5"
              >
                Explore Facilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 section-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-5xl md:text-6xl font-bold text-gradient-modern mb-4 transition-transform group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Premium <span className="text-gradient-modern">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive fitness solutions designed for every goal. From strength building 
              to endurance training, our expertly crafted programs deliver results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-feature">
                  <div className="relative h-56 mb-8 overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/sessions">
              <Button className="btn-primary text-lg px-10 py-5">
                Explore All Programs
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 section-elevated">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Start Your <span className="text-gradient-modern">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
            Join our community of achievers. Experience world-class facilities, 
            expert guidance, and a supportive environment designed for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/contact">
              <Button className="btn-primary text-lg px-12 py-6">
                Become a Member
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="btn-secondary text-lg px-12 py-6"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
