import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import patternGrowth from '@/assets/pattern-growth.png';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'हमारा लक्ष्य',
      description: 'ग्रामीण समुदायों को सशक्त बनाना और उनके जीवन स्तर में सुधार लाना'
    },
    {
      icon: Eye,
      title: 'हमारा दृष्टिकोण',
      description: 'एक न्यायसंगत और समृद्ध समाज का निर्माण जहाँ हर व्यक्ति का विकास हो'
    },
    {
      icon: Heart,
      title: 'हमारे मूल्य',
      description: 'निष्पक्षता, पारदर्शिता, और समुदायिक सेवा के सिद्धांतों पर कार्य'
    }
  ];

  const achievements = [
    'सरकारी योजनाओं की जानकारी प्रदान करना',
    'शिक्षा और स्वास्थ्य सेवाओं में सुधार',
    'महिला सशक्तिकरण कार्यक्रम',
    'पर्यावरण संरक्षण पहल',
    'कृषि तकनीक में सुधार',
    'युवा रोजगार के अवसर'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full opacity-5 bg-contain bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${patternGrowth})` }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-hindi">
              हमारे बारे में
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              स्वतंत्रता प्राप्ति के सात दशकों बाद भी हम गरीबों की भलाई और ग्रामीण विकास के लिए निरंतर कार्यरत हैं
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* About Text */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed font-hindi">
                  भारत में स्वतंत्रता प्राप्ति के सात दशकों बाद भी गरीबों की भलाई के लिये चलाई जा रही शासकीय योजनाओं के अपेक्षित परिणाम प्राप्त नही हुये हैं। जिसका मुख्य कारण संभवतः जनसाधारण को योजनाओं से सम्बंधित जानकारीयों का ना होना ही है।
                </p>
                <p className="text-foreground leading-relaxed font-hindi">
                  सुदूर ग्रामीण तथा वनांचलों के निवासीयों तक तो यह जानकारी ही नही पहुंचती कि उनके कल्याण के लिए शासन की कौन कौन सी योजनाएं संचालित हैं और वे कैसे लाभान्वित होकर अपना जीवन स्तर सुधार सकते हैं।
                </p>
                <p className="text-foreground leading-relaxed font-hindi">
                  इसके लिए लोगों का जागरूक होना तथा उनकी भागीदारी अतिआवश्यक है। इस महान लक्ष्य की प्राप्ति हेतु हमारी संस्था निरंतर कार्यरत है।
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground font-hindi">हमारी उपलब्धियां:</h3>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle className="text-primary group-hover:text-primary-glow transition-colors" size={20} />
                      <span className="text-foreground font-hindi">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values Cards */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift shadow-soft border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                        <value.icon className="text-primary-foreground" size={24} />
                      </div>
                      <span className="font-hindi text-lg">{value.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-hindi leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-elegant">
            <blockquote className="text-2xl md:text-3xl font-semibold text-primary-foreground font-hindi leading-relaxed">
              "खुशियाँ बाटने से मिलती हैं, बटोरने से नहीं"
            </blockquote>
            <cite className="block mt-4 text-primary-foreground/80 font-hindi">
              — न्यू अभिनव प्रयास का सिद्धांत
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;