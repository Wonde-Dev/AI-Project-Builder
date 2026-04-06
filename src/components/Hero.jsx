import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Zap, 
  Globe, 
  ArrowRight, 
  Github, 
  Play,
  ChevronRight,
  Bot,
  Brain,
  Cloud,
  Smartphone
} from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = "Build your next project with AI...";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  const aiTools = [
    { name: 'ChatGPT', icon: Brain, color: 'green', description: 'For code generation' },
    { name: 'GitHub Copilot', icon: Code2, color: 'blue', description: 'AI pair programmer' },
    { name: 'Claude', icon: Bot, color: 'purple', description: 'For complex tasks' },
    { name: 'Vercel AI', icon: Zap, color: 'yellow', description: 'Deploy with AI' },
  ];

  const codeExamples = [
    {
      language: 'React Component',
      code: `const AIChatBot = () => {
  const [response, setResponse] = useState('');
  
  const generateWithAI = async (prompt) => {
    const result = await ai.complete(prompt);
    setResponse(result);
  };
  
  return (
    <div className="chat-container">
      <AIAssistant onGenerate={generateWithAI} />
      <ResponseDisplay text={response} />
    </div>
  );
};`,
      explanation: 'Build intelligent UIs with AI assistance'
    },
    {
      language: 'API Integration',
      code: `// AI-powered API route
export async function POST(req) {
  const { prompt } = await req.json();
  
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  });
  
  return Response.json(completion);
}`,
      explanation: 'Connect to AI models seamlessly'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Development Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Faster Than Ever
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Leverage multiple AI models to build, debug, and deploy your projects. 
              From concept to production in record time.
            </p>

            {/* AI Tools Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aiTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-${tool.color}-100 dark:bg-${tool.color}-900/30 rounded-lg group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 text-${tool.color}-600 dark:text-${tool.color}-400`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{tool.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Building Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold flex items-center space-x-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* GitHub Stars */}
            <div className="flex items-center space-x-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Github className="w-4 h-4" />
                <span>10k+ stars</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4" />
                <span>Fast & Reliable</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Dashboard Header */}
              <div className="bg-gray-100 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">AI Assistant</button>
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg">Preview</button>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Code Tabs */}
                <div className="flex space-x-2 mb-4">
                  {codeExamples.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {example.language}
                    </button>
                  ))}
                </div>

                {/* Code Display */}
                <div className="bg-gray-900 rounded-xl p-4 mb-4">
                  <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                    <code>{codeExamples[activeTab].code}</code>
                  </pre>
                </div>

                {/* Explanation */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {codeExamples[activeTab].explanation}
                </p>

                {/* AI Suggestions */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AI Suggestion</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Consider adding error handling and loading states for better user experience.
                        Would you like me to generate the complete component?
                      </p>
                      <button className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center space-x-1 hover:underline">
                        <span>Generate component</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">10x</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Faster Coding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">95%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Less Bugs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">AI Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse animation-delay-2000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;