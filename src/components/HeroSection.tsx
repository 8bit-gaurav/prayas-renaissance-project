import { ArrowRight, Heart, Users, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white font-hindi leading-tight">
              ख़ामोशी से भी
              <span className="block text-accent animate-pulse-soft">नेक काम होते हैं</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-hindi font-light">
              मैंने देखा है पेड़ों को छाँव देते हुए
            </p>
          </div>

          {/* Subtitle */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-white font-hindi">
              न्यू अभिनव प्रयास में स्वागत है
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              खुशियां बांटने से मिलती हैं, बटोरने से नहीं। हमारे साथ जुड़िए और समाज सेवा में अपना योगदान दें।
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-spring text-lg px-8 py-6 group"
            >
              <span className="font-hindi mr-2">हमारे साथ जुड़ें</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              <span className="font-hindi">और जानें</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-8 border-t border-white/20">
            <div className="text-center space-y-2 hover-lift">
              <div className="w-16 h-16 mx-auto bg-gradient-warm rounded-full flex items-center justify-center shadow-soft">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-white/80 font-hindi">सेवित परिवार</div>
            </div>
            <div className="text-center space-y-2 hover-lift">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                <Heart className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80 font-hindi">सामुदायिक कार्यक्रम</div>
            </div>
            <div className="text-center space-y-2 hover-lift">
              <div className="w-16 h-16 mx-auto bg-gradient-warm rounded-full flex items-center justify-center shadow-soft">
                <TreePine className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-white/80 font-hindi">गांव पहुंच</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;