import { Clock, Users, Zap, Dumbbell, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import groupTraining from "@/assets/group-training.jpg";
import personalTraining from "@/assets/personal-training.jpg";

const Sessions = () => {
  const sessions = [
    {
      title: "Strength Training",
      description: "Build muscle and increase power with our comprehensive strength training programs.",
      duration: "45-60 min",
      capacity: "1-4 people",
      intensity: "High",
      icon: Dumbbell,
      image: personalTraining,
      features: ["Free weights", "Resistance machines", "Progressive overload", "Form coaching"]
    },
    {
      title: "HIIT Classes",
      description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
      duration: "30-45 min",
      capacity: "8-12 people",
      intensity: "Very High",
      icon: Zap,
      image: groupTraining,
      features: ["Cardio circuits", "Bodyweight exercises", "Equipment variety", "Heart rate monitoring"]
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals and fitness level.",
      duration: "60 min",
      capacity: "1 person",
      intensity: "Customized",
      icon: Target,
      image: personalTraining,
      features: ["Goal assessment", "Custom workout plans", "Nutrition guidance", "Progress tracking"]
    },
    {
      title: "Group Fitness",
      description: "Motivating group classes that make fitness fun and social.",
      duration: "45 min",
      capacity: "10-20 people",
      intensity: "Medium",
      icon: Users,
      image: groupTraining,
      features: ["Variety of formats", "Music motivation", "Community support", "All fitness levels"]
    },
    {
      title: "Cardio Training",
      description: "Improve your cardiovascular health with structured cardio workouts.",
      duration: "30-45 min",
      capacity: "6-10 people",
      intensity: "Medium-High",
      icon: Heart,
      image: groupTraining,
      features: ["Treadmill intervals", "Cycling classes", "Rowing workouts", "Endurance building"]
    },
    {
      title: "Functional Training",
      description: "Real-world movement patterns to improve daily life performance.",
      duration: "45 min",
      capacity: "6-8 people",
      intensity: "Medium",
      icon: Target,
      image: personalTraining,
      features: ["Movement quality", "Core stability", "Balance training", "Injury prevention"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Training <span className="text-gradient">Sessions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover our comprehensive range of training sessions designed to help you 
            achieve your fitness goals, regardless of your experience level.
          </p>
          <Button className="btn-hero">
            Book Your First Session
          </Button>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {sessions.map((session, index) => {
              const Icon = session.icon;
              return (
                <div key={index} className="card-energy group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src={session.image} 
                        alt={session.title}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{session.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{session.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                          <div className="text-sm font-semibold">{session.duration}</div>
                          <div className="text-xs text-muted-foreground">Duration</div>
                        </div>
                        <div className="text-center">
                          <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                          <div className="text-sm font-semibold">{session.capacity}</div>
                          <div className="text-xs text-muted-foreground">Capacity</div>
                        </div>
                        <div className="text-center">
                          <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
                          <div className="text-sm font-semibold">{session.intensity}</div>
                          <div className="text-xs text-muted-foreground">Intensity</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">What's included:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {session.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Book Session
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gym-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-gradient">Fitness Journey</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your first session today and experience the Sardula Gym difference. 
            Our expert trainers are ready to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Book Free Consultation
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Schedule
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sessions;