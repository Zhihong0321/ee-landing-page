import { useEffect, useRef, useState } from 'react';
import { 
  Sun, 
  Zap, 
  Shield, 
  Battery, 
  Home, 
  Building2, 
  Wrench, 
  MessageCircle,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Cpu,
  FileCheck,
  Settings,
  TrendingUp
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={() => scrollToSection('#hero')} className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="Eternalgy" 
              className={`h-10 transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#0161c9] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#cta')}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-xl shadow-xl p-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#cta')}
              className="btn-primary w-full mt-4 text-sm py-3"
            >
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-solar.jpg" 
          alt="Solar Panels" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#f6c71e] rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6c71e]/20 backdrop-blur-sm rounded-full text-[#f6c71e] text-sm font-semibold mb-6">
              <Sun size={16} className="animate-pulse" />
              High-Efficiency Solar Made Simple
            </span>
          </div>

          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Powering Tomorrow{' '}
            <span className="text-[#f6c71e]">With Solar Energy</span>
          </h1>

          <p 
            className={`text-lg md:text-xl text-gray-300 mb-8 max-w-2xl transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            From SEDA applications to bi-facial panel installation—we handle the complexity 
            so you can just enjoy the savings. Transform your home with cutting-edge solar technology.
          </p>

          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button 
              onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center gap-2 group"
            >
              Start Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#f6c71e]">10+</div>
              <div className="text-sm text-gray-400 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#f6c71e]">5000+</div>
              <div className="text-sm text-gray-400 mt-1">Installations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#f6c71e]">98%</div>
              <div className="text-sm text-gray-400 mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-[#f3f3f3] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#0161c9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#f6c71e]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about-installation.jpg" 
                alt="Solar Installation" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#0161c9] rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={28} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0161c9]">100%</div>
                  <div className="text-sm text-gray-600">Certified Team</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <span className="section-label">About Eternalgy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading the Solar{' '}
              <span className="text-[#0161c9]">Revolution</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience, we've helped thousands of homeowners and 
              businesses harness the power of the sun. Our mission is simple: make renewable 
              energy accessible, affordable, and beautiful.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in Johor, Malaysia, we combine local expertise with world-class technology 
              to deliver solar solutions that exceed expectations. From initial consultation 
              to final activation, we're with you every step of the way.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'N-Type TOPCon Technology',
                'Bi-Facial Panel Systems',
                'AI-Driven Design',
                '24/7 Monitoring',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#0161c9] flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-2 group"
            >
              Explore Our Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Custom solar installations designed for your home\'s unique energy needs and roof configuration.',
      color: 'bg-blue-50',
      iconColor: 'text-[#0161c9]',
    },
    {
      icon: Building2,
      title: 'Commercial Systems',
      description: 'Scale your business sustainably with powerful commercial solar solutions and rapid ROI.',
      color: 'bg-yellow-50',
      iconColor: 'text-[#f6c71e]',
    },
    {
      icon: Wrench,
      title: 'Solar Maintenance',
      description: 'Keep your system running at peak performance with our expert care and monitoring.',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Store excess energy for when you need it most with cutting-edge battery solutions.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Cpu,
      title: 'Smart Monitoring',
      description: 'Real-time tracking and AI-powered optimization for maximum efficiency.',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
    },
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Get expert guidance on your journey to clean energy independence.',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="section-label">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="text-[#0161c9]">Solar Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            From consultation to maintenance, we provide end-to-end solar services 
            tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl ${service.color} card-hover cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={service.iconColor} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 text-[#0161c9] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features/Why Choose Us Section
function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Cpu,
      title: 'N-Type TOPCon Technology',
      description: 'Jinko Tiger Neo N-type Bi-Facial modules offer superior efficiency and lower degradation compared to traditional panels.',
      highlight: '25% More Efficient',
    },
    {
      icon: Sun,
      title: 'Bi-Facial Gain',
      description: 'Our panels capture sunlight from both sides, maximizing energy yield per square foot of your roof space.',
      highlight: 'Up to 30% More Power',
    },
    {
      icon: Zap,
      title: 'Tier-1 Reliability',
      description: 'Bundled with SAJ R5 string inverters for stable, high-efficiency power conversion and long-term reliability.',
      highlight: '99% Uptime',
    },
    {
      icon: Shield,
      title: 'Roof Leakage Guarantee',
      description: 'Specific warranty for roof integrity covering repairs up to 20% of project cost—addressing the #1 fear of solar customers.',
      highlight: 'Full Protection',
    },
    {
      icon: FileCheck,
      title: 'Full Regulatory Handling',
      description: 'We manage SEDA ATAP SOLAR applications and TNB Smart Meter synchronization, taking the bureaucracy weight off you.',
      highlight: 'Hassle-Free',
    },
    {
      icon: TrendingUp,
      title: 'ATAP Solar Simulator',
      description: 'Data-driven ROI predictions with our precise Solar ATAP Calculator—no guesswork, just accurate projections.',
      highlight: 'AI-Powered',
    },
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 bg-[#f3f3f3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="section-label">Why Choose Eternalgy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Eternalgy{' '}
            <span className="text-[#0161c9]">Advantage</span>
          </h2>
          <p className="text-lg text-gray-600">
            Industry-leading technology, unmatched warranties, and a commitment to 
            excellence that sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#0161c9]/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="text-[#0161c9]" size={28} />
                </div>
                <span className="px-3 py-1 bg-[#f6c71e]/20 text-[#f6c71e] text-xs font-bold rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We assess your energy needs, roof condition, and site requirements to design the perfect system.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Design',
      description: 'Custom system architecture tailored to your property with AI-powered optimization.',
      icon: Settings,
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Professional installation by certified experts with minimal disruption to your home.',
      icon: Wrench,
    },
    {
      number: '04',
      title: 'Activation',
      description: 'System goes live, and you start saving immediately with real-time monitoring.',
      icon: Zap,
    },
  ];

  return (
    <section 
      id="process" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-[#0161c9] via-[#f6c71e] to-[#0161c9] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="section-label">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Path to{' '}
            <span className="text-[#0161c9]">Solar Energy</span>
          </h2>
          <p className="text-lg text-gray-600">
            A simple, streamlined process from consultation to activation.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-[#f3f3f3] rounded-2xl p-8 lg:p-10 relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#0161c9] rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <step.icon className="text-[#f6c71e]" size={28} />
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} hidden lg:block`}>
                <div className="relative">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#0161c9] to-[#f6c71e] rounded-full flex items-center justify-center shadow-xl">
                    <step.icon className="text-white" size={48} />
                  </div>
                  {/* Connector Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#0161c9]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      image: '/images/project-1.jpg',
      title: 'Sunrise Valley Estate',
      location: 'Johor, Malaysia',
      stats: '250kW System | 350 Homes Powered',
      description: 'A large-scale residential solar installation providing clean energy to an entire community.',
    },
    {
      image: '/images/project-2.jpg',
      title: 'GreenTech Headquarters',
      location: 'Kuala Lumpur, Malaysia',
      stats: '500kW Commercial | RM200K Annual Savings',
      description: 'Commercial rooftop installation helping a tech company achieve carbon neutrality.',
    },
    {
      image: '/images/project-3.jpg',
      title: 'Harmony Residential',
      location: 'Penang, Malaysia',
      stats: '15kW Residential | 100% Energy Offset',
      description: 'A family home achieving complete energy independence with battery storage.',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-[#f3f3f3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="section-label">Our Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured{' '}
              <span className="text-[#0161c9]">Installations</span>
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button
              onClick={prevProject}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0161c9] hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0161c9] hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
            <span className="text-lg font-semibold text-gray-600 ml-4">
              {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Project Carousel */}
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 relative"
              >
                <div className="relative h-[500px] lg:h-[600px]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <div 
                      className={`max-w-2xl transition-all duration-700 ${
                        isVisible && currentProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-[#f6c71e] mb-3">
                        <MapPin size={18} />
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-[#f6c71e] font-semibold mb-4">{project.stats}</p>
                      <p className="text-gray-300 text-lg">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentProject === index 
                  ? 'bg-[#0161c9] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      content: 'Eternalgy transformed our home\'s energy consumption. Our bills dropped by 80% in the first year! The team was professional from start to finish.',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      role: 'Business Owner',
      content: 'Professional team, flawless installation, and incredible support. Best investment we\'ve made for our company. The ROI exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Homeowner',
      content: 'From consultation to activation, the process was seamless. The ATAP simulator gave us confidence in our decision. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 text-[200px] font-serif text-[#0161c9]/5 leading-none select-none">
        "
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="text-[#0161c9]">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#f3f3f3] rounded-2xl p-8 relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150 + 200}ms`,
                transform: isVisible ? `rotate(${index % 2 === 0 ? -1 : 1}deg)` : 'rotate(0deg)'
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#f6c71e] fill-[#f6c71e]" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0161c9] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: 'How much can I save with solar panels?',
      answer: 'Savings vary by location and energy usage, but most customers see 50-90% reduction in electricity bills. Our ATAP Solar Simulator provides precise ROI predictions based on your specific situation.',
    },
    {
      question: 'What is the installation timeline?',
      answer: 'Typical residential installation takes 1-3 days, with permitting adding 2-4 weeks. We handle all SEDA and TNB applications to ensure a smooth process.',
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we partner with several financing providers to offer flexible payment plans. We also help you navigate available government incentives and tax benefits.',
    },
    {
      question: 'What warranties do you provide?',
      answer: 'Our systems come with 25-year panel warranties, 10-year workmanship guarantees, and our unique roof leakage guarantee covering repairs up to 20% of project cost.',
    },
    {
      question: 'Will solar work during power outages?',
      answer: 'With battery storage, yes. Grid-tied systems without batteries will shut off for safety reasons. We offer hybrid solutions that keep your lights on during outages.',
    },
  ];

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-24 bg-[#f3f3f3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/faq-consultation.jpg" 
                  alt="Consultation" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Contact Card */}
              <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-6">Our solar experts are here to help you.</p>
                <div className="space-y-3">
                  <a href="tel:+60123456789" className="flex items-center gap-3 text-[#0161c9] hover:underline">
                    <Phone size={20} />
                    <span>+60 12-345 6789</span>
                  </a>
                  <a href="mailto:hello@eternalgy.com" className="flex items-center gap-3 text-[#0161c9] hover:underline">
                    <Mail size={20} />
                    <span>hello@eternalgy.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <span className="section-label">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Frequently Asked{' '}
              <span className="text-[#0161c9]">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                    <div className={`w-8 h-8 bg-[#0161c9]/10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}>
                      <span className="text-[#0161c9] text-xl font-bold">+</span>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="cta" 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-background.jpg" 
          alt="Solar Sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Rising Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#f6c71e] rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0',
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Harness the{' '}
            <span className="text-[#f6c71e]">Power of the Sun?</span>
          </h2>
        </div>

        <div 
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free consultation and start your solar journey today. 
            Our experts are ready to help you save money and the planet.
          </p>
        </div>

        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="btn-secondary text-lg px-10 py-5 flex items-center gap-2 group animate-pulse-glow"
          >
            Get Free Quote
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div 
          className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a href="tel:+60123456789" className="flex items-center gap-3 text-white hover:text-[#f6c71e] transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400">Call Us</div>
              <div className="font-semibold">+60 12-345 6789</div>
            </div>
          </a>
          <a href="mailto:hello@eternalgy.com" className="flex items-center gap-3 text-white hover:text-[#f6c71e] transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400">Email Us</div>
              <div className="font-semibold">hello@eternalgy.com</div>
            </div>
          </a>
          <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400">Visit Us</div>
              <div className="font-semibold">Taman Mount Austin, Johor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Get Your Free Quote</DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill in your details and our team will contact you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0161c9] focus:border-transparent outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0161c9] focus:border-transparent outline-none" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0161c9] focus:border-transparent outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0161c9] focus:border-transparent outline-none" placeholder="+60 12-345 6789" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Electricity Bill (RM)</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0161c9] focus:border-transparent outline-none">
                <option>Select range</option>
                <option>Below RM 200</option>
                <option>RM 200 - 400</option>
                <option>RM 400 - 600</option>
                <option>RM 600 - 800</option>
                <option>Above RM 800</option>
              </select>
            </div>
            <button 
              type="button"
              onClick={() => {
                setIsDialogOpen(false);
                alert('Thank you! We will contact you within 24 hours.');
              }}
              className="btn-primary w-full"
            >
              Submit Request
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}

// Footer
function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src="/images/logo.png" 
              alt="Eternalgy" 
              className="h-12 brightness-0 invert mb-6"
            />
            <p className="text-gray-400 mb-6">
              Powering a sustainable future with cutting-edge solar solutions for homes and businesses.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0161c9] transition-colors"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#cta' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Residential Solar',
                'Commercial Systems',
                'Solar Maintenance',
                'Energy Storage',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#0161c9] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Jalan Austin Heights,<br />
                  Taman Mount Austin,<br />
                  81100 Johor Bahru, Johor
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#0161c9] flex-shrink-0" size={20} />
                <a href="tel:+60123456789" className="text-gray-400 hover:text-white transition-colors">
                  +60 12-345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#0161c9] flex-shrink-0" size={20} />
                <a href="mailto:hello@eternalgy.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@eternalgy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Eternalgy Sdn Bhd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <ProcessSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
