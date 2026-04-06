import { useState } from 'react';
import { 
  Code2, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  Heart,
  ArrowRight,
  Facebook,
  Instagram,
  Globe
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "API", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Changelog", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Community", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Security", href: "#" },
        { name: "GDPR", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CodeFlow AI
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering developers to build faster and smarter with AI-powered tools. 
              Join the future of software development.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>support@codeflow.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Subscribe to our newsletter
              </h4>
              <p className="text-gray-400">
                Get the latest updates, features, and AI development tips.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                {subscribed && (
                  <div className="absolute -top-10 left-0 right-0 bg-green-500 text-white text-sm py-2 px-4 rounded-lg text-center animate-fade-in">
                    Thanks for subscribing! 🎉
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} CodeFlow AI. All rights reserved. Built with{' '}
            <Heart className="w-4 h-4 inline-block text-red-500 animate-pulse" /> for developers.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Cookies
            </a>
            <div className="flex items-center space-x-1 text-gray-500">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent text-sm focus:outline-none cursor-pointer">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;