import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'फोन',
      details: ['+91 8109591762'],
      description: 'सोमवार से शुक्रवार, सुबह 9:00 से शाम 6:00 तक'
    },
    {
      icon: Mail,
      title: 'ईमेल',
      details: ['info@newabhinavprayas.org', 'contact@newabhinavprayas.org'],
      description: 'हम 24 घंटे के भीतर उत्तर देने का प्रयास करते हैं'
    },
    {
      icon: MapPin,
      title: 'पता',
      details: ['मुख्य कार्यालय', 'न्यू अभिनव प्रयास'],
      description: 'व्यक्तिगत भेंट के लिए पहले से अपॉइंटमेंट लें'
    },
    {
      icon: Clock,
      title: 'कार्य समय',
      details: ['सोमवार - शुक्रवार: 9:00 AM - 6:00 PM', 'शनिवार: 9:00 AM - 2:00 PM'],
      description: 'रविवार को बंद (आपातकाल को छोड़कर)'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-hindi">
              संपर्क करें
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              हमसे जुड़ें और सामाजिक सेवा में अपना योगदान दें। आपके सुझाव और सहयोग का स्वागत है
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground font-hindi mb-6">
                  संपर्क जानकारी
                </h3>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="hover-lift shadow-soft border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-3 text-foreground">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                            <info.icon className="text-primary-foreground" size={24} />
                          </div>
                          <span className="font-hindi text-lg">{info.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-foreground font-medium">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-muted-foreground font-hindi">
                          {info.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-primary rounded-2xl p-6 shadow-elegant">
                <h4 className="text-xl font-bold text-primary-foreground font-hindi mb-4">
                  तुरंत जुड़ें
                </h4>
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    <Phone size={16} className="mr-2" />
                    <span className="font-hindi">अभी कॉल करें</span>
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    <Mail size={16} className="mr-2" />
                    <span className="font-hindi">ईमेल भेजें</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground font-hindi">
                    संदेश भेजें
                  </CardTitle>
                  <p className="text-muted-foreground font-hindi">
                    आपके प्रश्न और सुझावों का स्वागत है
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-hindi">
                        नाम *
                      </label>
                      <Input 
                        placeholder="आपका पूरा नाम"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-hindi">
                        फोन नंबर
                      </label>
                      <Input 
                        placeholder="+91 XXXXX XXXXX"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-hindi">
                      ईमेल *
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-hindi">
                      विषय
                    </label>
                    <Input 
                      placeholder="संदेश का विषय"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-hindi">
                      संदेश *
                    </label>
                    <Textarea 
                      placeholder="यहाँ अपना संदेश लिखें..."
                      rows={5}
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-spring"
                    size="lg"
                  >
                    <Send size={16} className="mr-2" />
                    <span className="font-hindi">संदेश भेजें</span>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center font-hindi">
                    * आवश्यक फील्ड। हम आपकी जानकारी को पूर्ण सुरक्षा के साथ रखते हैं।
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;