import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  GitBranch, 
  Zap, 
  Shield, 
  Globe,
  Smartphone,
  Cloud,
  Sparkles,
  Rocket,
  Bot,
  Eye,
  Lock,
  Gauge,
  Users
} from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: Brain,
      title: "Multi-AI Integration",
      description: "Access ChatGPT, Claude, Copilot, and more from one interface. Switch between models seamlessly.",
      gradient: "from-purple-500 to-pink-500",
      stats: "5+ AI models",
      details: "Integrate with OpenAI, Anthropic, Google AI, and custom models",
      image: "🤖",
      color: "purple"
    },
    {
      icon: Code2,
      title: "Smart Code Generation",
      description: "Generate entire components, functions, and APIs from natural language descriptions.",
      gradient: "from-blue-500 to-cyan-500",
      stats: "10x faster coding",
      details: "Support for 20+ programming languages and frameworks",
      image: "⚡",
      color: "blue"
    },
    {
      icon: GitBranch,
      title: "AI-Powered Refactoring",
      description: "Automatically improve code quality, fix bugs, and optimize performance.",
      gradient: "from-green-500 to-emerald-500",
      stats: "95% cleaner code",
      details: "Real-time suggestions for better patterns and practices",
      image: "🔄",
      color: "green"
    },
    {
      icon: Eye,
      title: "Visual Project Builder",
      description: "Drag-and-drop interface to build projects visually. See changes in real-time.",
      gradient: "from-orange-500 to-red-500",
      stats: "Visual workflow",
      details: "Real-time preview with instant feedback",
      image: "🎨",
      color: "orange"
    },
    {
      icon: Rocket,
      title: "One-Click Deployment",
      description: "Deploy to Vercel, Netlify, or AWS directly from the editor.",
      gradient: "from-indigo-500 to-purple-500",
      stats: "Deploy in 1-click",
      details: "Automatic CI/CD pipeline setup",
      image: "🚀",
      color: "indigo"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration with AI-assisted code reviews and pair programming.",
      gradient: "from-yellow-500 to-orange-500",
      stats: "Team features",
      details: "Live sharing, comments, and AI code reviews",
      image: "👥",
      color: "yellow"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "End-to-end encryption, SSO, and compliance with industry standards.",
      gradient: "from-red-500 to-pink-500",
      stats: "Bank-grade security",
      details: "SOC2, GDPR, HIPAA compliant",
      image: "🔒",
      color: "red"
    },
    {
      icon: Gauge,
      title: "Performance Analytics",
      description: "Real-time performance monitoring and optimization suggestions.",
      gradient: "from-teal-500 to-green-500",
      stats: "Real-time metrics",
      details: "Identify bottlenecks and optimize automatically",
      image: "📊",
      color: "teal"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powerful Features</span>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Build Smarter With AI
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to build production-ready applications with the power of multiple AI models
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setActiveFeature(index)}
                onHoverEnd={() => setActiveFeature(null)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative inline-flex p-3 bg-gradient-to-r ${feature.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Image Emoji */}
                <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  {feature.image}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold text-${feature.color}-600 dark:text-${feature.color}-400`}>
                    {feature.stats}
                  </span>
                  
                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-4">
                    {feature.details}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How It Works */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            How CodeFlow AI Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Describe Your Idea",
                description: "Type what you want to build in plain English. Our AI understands your requirements.",
                icon: Sparkles
              },
              {
                step: 2,
                title: "AI Generates Code",
                description: "Watch as multiple AI models collaborate to generate production-ready code.",
                icon: Brain
              },
              {
                step: 3,
                title: "Deploy Instantly",
                description: "Preview, tweak, and deploy your application with one click.",
                icon: Rocket
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2" />
                  )}
                  
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;