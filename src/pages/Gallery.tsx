import { useState } from "react";
import { X } from "lucide-react";
import gymHero from "@/assets/gym-hero.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import groupTraining from "@/assets/group-training.jpg";
import personalTraining from "@/assets/personal-training.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gymHero,
      alt: "Intense training session",
      category: "Training"
    },
    {
      src: gymInterior,
      alt: "Modern gym equipment",
      category: "Facilities"
    },
    {
      src: groupTraining,
      alt: "Group fitness class",
      category: "Classes"
    },
    {
      src: personalTraining,
      alt: "Personal training session",
      category: "Personal Training"
    },
    {
      src: gymHero,
      alt: "Strength training area",
      category: "Equipment"
    },
    {
      src: groupTraining,
      alt: "HIIT workout session",
      category: "Training"
    },
    {
      src: gymInterior,
      alt: "Cardio equipment zone",
      category: "Facilities"
    },
    {
      src: personalTraining,
      alt: "One-on-one coaching",
      category: "Personal Training"
    },
    {
      src: gymHero,
      alt: "Free weights section",
      category: "Equipment"
    }
  ];

  const categories = ["All", "Training", "Facilities", "Classes", "Personal Training", "Equipment"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gym <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look inside Sardula Gym and see what makes us the premier 
            fitness destination. From state-of-the-art equipment to energetic training sessions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gym-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-primary/20 backdrop-blur-sm rounded px-3 py-1 text-sm font-medium mb-2 inline-block">
                      {image.category}
                    </div>
                    <h3 className="text-lg font-semibold">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gym-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Sq Ft Space</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Equipment Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Class Formats</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;