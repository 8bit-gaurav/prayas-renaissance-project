import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'होम', href: '#home' },
    { name: 'हमारे बारे में', href: '#about' },
    { name: 'गतिविधियाँ', href: '#activities' },
    { name: 'योजनाएं', href: '#programs' },
    { name: 'संपर्क', href: '#contact' }
  ];

  const services = [
    'शिक्षा एवं जागरूकता',
    'स्वास्थ्य सेवाएं',
    'कृषि विकास',
    'महिला सशक्तिकरण',
    'गवर्नमेंट स्कीम गाइडेंस'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">न</span>
              </div>
              <div>
                <h3 className="font-hindi font-bold text-xl">न्यू अभिनव प्रयास</h3>
                <p className="text-sm opacity-80">New Abhinav Prayas</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-90 font-hindi">
              हमारा लक्ष्य है ग्रामीण समुदायों को सशक्त बनाना और उनके जीवन स्तर में सुधार लाना। 
              खुशियां बांटने से मिलती हैं, बटोरने से नहीं।
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart size={16} className="text-accent" />
              <span className="font-hindi">सामाजिक सेवा के लिए समर्पित</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg font-hindi">त्वरित लिंक</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity font-hindi"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg font-hindi">हमारी सेवाएं</h4>
            <nav className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-sm opacity-80 font-hindi">
                  {service}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg font-hindi">संपर्क जानकारी</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>+91 8109591762</p>
                  <p className="opacity-70 font-hindi">सोम-शुक्र, 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>info@newabhinavprayas.org</p>
                  <p className="opacity-70 font-hindi">24 घंटे में उत्तर</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-hindi">मुख्य कार्यालय</p>
                  <p className="opacity-70 font-hindi">न्यू अभिनव प्रयास</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80 text-center md:text-left">
              <p className="font-hindi">
                © 2024 न्यू अभिनव प्रयास। सभी अधिकार सुरक्षित।
              </p>
              <p className="text-xs mt-1">
                Made with <Heart size={12} className="inline text-accent" /> for social welfare
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity font-hindi">
                गोपनीयता नीति
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity font-hindi">
                नियम व शर्तें
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;