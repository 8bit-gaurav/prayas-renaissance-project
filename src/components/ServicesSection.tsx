import { BookOpen, Heart, Sprout, Users, Building, Laptop } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'शिक्षा एवं जागरूकता',
      description: 'ग्रामीण क्षेत्रों में शिक्षा के प्रसार और जागरूकता कार्यक्रमों का आयोजन',
      features: ['साक्षरता अभियान', 'डिजिटल शिक्षा', 'व्यावसायिक प्रशिक्षण']
    },
    {
      icon: Heart,
      title: 'स्वास्थ्य सेवाएं',
      description: 'स्वास्थ्य जांच शिविर और चिकित्सा सुविधाओं का विस्तार',
      features: ['निःशुल्क जांच', 'टीकाकरण अभियान', 'स्वास्थ्य शिक्षा']
    },
    {
      icon: Sprout,
      title: 'कृषि विकास',
      description: 'आधुनिक कृषि तकनीकों और जैविक खेती को बढ़ावा देना',
      features: ['बीज वितरण', 'कृषि प्रशिक्षण', 'उर्वरक सहायता']
    },
    {
      icon: Users,
      title: 'महिला सशक्तिकरण',
      description: 'महिलाओं के लिए स्वरोजगार और कौशल विकास कार्यक्रम',
      features: ['सिलाई प्रशिक्षण', 'स्वयं सहायता समूह', 'उद्यमिता विकास']
    },
    {
      icon: Building,
      title: 'गवर्नमेंट स्कीम गाइडेंस',
      description: 'सरकारी योजनाओं की जानकारी और आवेदन में सहायता',
      features: ['योजना जानकारी', 'दस्तावेज़ सहायता', 'ऑनलाइन आवेदन']
    },
    {
      icon: Laptop,
      title: 'डिजिटल साक्षरता',
      description: 'कंप्यूटर और इंटरनेट के उपयोग की ट्रेनिंग',
      features: ['बेसिक कंप्यूटर', 'इंटरनेट उपयोग', 'डिजिटल पेमेंट']
    }
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-hindi">
              हमारी गतिविधियाँ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ग्रामीण विकास और सामाजिक कल्याण के लिए हमारी व्यापक सेवाएं
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-lift shadow-soft border-border group cursor-pointer transition-spring"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-smooth">
                      <service.icon className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-xl font-hindi text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-hindi leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-foreground font-hindi">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 shadow-soft">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-hindi mb-4">
                हमारे कार्यक्रमों में भाग लें
              </h3>
              <p className="text-muted-foreground font-hindi mb-6 max-w-2xl mx-auto">
                आपका योगदान हमारे समाज के विकास में महत्वपूर्ण भूमिका निभा सकता है। 
                आज ही हमसे जुड़ें और सामाजिक बदलाव का हिस्सा बनें।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-hindi font-medium hover:shadow-glow transition-spring">
                  स्वयंसेवक बनें
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-hindi font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                  संपर्क करें
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;