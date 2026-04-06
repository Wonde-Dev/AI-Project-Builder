import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  Share2,
  Twitter,
  Linkedin,
  Github,
  Users // 👈 This was missing!
} from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRating, setSelectedRating] = useState(5);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Developer at TechCorp",
      content: "CodeFlow AI has transformed how our team builds applications. The AI suggestions are incredibly accurate and have cut our development time in half. The multi-AI integration is a game-changer.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1",
      company: "TechCorp",
      project: "Built an e-commerce platform in 2 weeks",
      social: {
        twitter: "@sarahj_dev",
        github: "sarahj"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO at StartupX",
      content: "As a CTO, I need tools that scale. CodeFlow's enterprise features and security compliance made it an easy choice. Our team's productivity increased by 200%.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=2",
      company: "StartupX",
      project: "Scaled from MVP to 1M users",
      social: {
        twitter: "@mikechen",
        linkedin: "michaelchen"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Freelance Developer",
      content: "The AI-powered code generation saves me hours of boilerplate coding. I can focus on the creative aspects while the AI handles the repetitive stuff. Best investment for freelancers.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=3",
      company: "Independent",
      project: "Completed 50+ client projects",
      social: {
        twitter: "@emilydev",
        github: "emilyr"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Engineering Manager at InnovateLabs",
      content: "The real-time collaboration features are outstanding. My distributed team works seamlessly together, and the AI code reviews catch issues before they reach production.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=4",
      company: "InnovateLabs",
      project: "Managed 20+ developers across 3 continents",
      social: {
        twitter: "@davidkim",
        linkedin: "davidkim"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Founder at AI Startup",
      content: "Building an AI startup requires the best tools. CodeFlow's integration with multiple AI models helped us prototype and iterate faster than ever before.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
      company: "AI Solutions",
      project: "Launched AI product in 3 months",
      social: {
        twitter: "@lisawang",
        github: "lisaw"
      }
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Software Architect",
      content: "The code refactoring suggestions are incredibly smart. It's like having a senior architect review every PR. We've seen a 90% reduction in technical debt.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=6",
      company: "Enterprise Corp",
      project: "Modernized legacy system",
      social: {
        twitter: "@jamesw",
        linkedin: "jameswilson"
      }
    }
  ];

  const stats = [
    { label: "Active Users", value: "50,000+", icon: Users },
    { label: "Code Generations", value: "10M+", icon: MessageSquare },
    { label: "Happy Customers", value: "98%", icon: ThumbsUp },
    { label: "Countries", value: "120+", icon: Share2 }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full mb-4">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Testimonials</span>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Loved by Developers Worldwide
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied developers who've transformed their workflow
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-purple-200 dark:text-purple-900 mb-4" />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-4 border-purple-500/30"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-2">
                  {testimonials[currentIndex].social.twitter && (
                    <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </a>
                  )}
                  {testimonials[currentIndex].social.github && (
                    <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Highlight */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <span className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Featured Project:</span>
                  <span>{testimonials[currentIndex].project}</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-purple-600 dark:bg-purple-400'
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Rating Filter */}
        <div className="flex justify-center space-x-2 mt-12">
          {[5].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedRating === rating
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {rating} Stars
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold inline-flex items-center space-x-2 hover:shadow-xl hover:shadow-purple-600/30 transition-all">
            <span>Share Your Story</span>
            <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;