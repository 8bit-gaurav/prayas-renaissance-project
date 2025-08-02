import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'होम', nameEn: 'Home', href: '#home' },
    { name: 'हमारे बारे में', nameEn: 'About', href: '#about' },
    { name: 'गतिविधियाँ', nameEn: 'Activities', href: '#activities' },
    { name: 'योजनाएं', nameEn: 'Programs', href: '#programs' },
    { name: 'संपर्क करें', nameEn: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top contact bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span className="hidden sm:inline">+91 8109591762</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="hidden md:inline">info@newabhinavprayas.org</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <span className="font-hindi text-xs">सामाजिक सेवा में आपका स्वागत है</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-bold text-lg">न</span>
              </div>
              <div className="flex flex-col">
                <span className="font-hindi font-semibold text-base md:text-lg text-foreground">न्यू अभिनव प्रयास</span>
                <span className="text-xs text-muted-foreground hidden sm:block">New Abhinav Prayas</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 transition-smooth"
                >
                  <span className="font-hindi font-medium text-sm xl:text-base text-foreground group-hover:text-primary">
                    {item.name}
                  </span>
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-smooth"></span>
                </a>
              ))}
              <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-spring text-sm">
                <span className="font-hindi">सहयोग करें</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border shadow-elegant z-40">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 font-hindi font-medium text-foreground hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-spring mt-4">
                  <span className="font-hindi">सहयोग करें</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-28"></div>
    </>
  );
};

export default Navigation;