import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Zap, 
  Users, 
  Building2, 
  Sparkles,
  Rocket,
  Star,
  HelpCircle,
  CreditCard,
  Calendar
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual developers and small projects",
      price: {
        monthly: 29,
        yearly: 290
      },
      icon: Sparkles,
      features: [
        { name: "500 AI generations/month", included: true },
        { name: "Basic code refactoring", included: true },
        { name: "GitHub integration", included: true },
        { name: "Community support", included: true },
        { name: "5 team members", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Custom AI models", included: false },
        { name: "SLA guarantee", included: false }
      ],
      gradient: "from-gray-600 to-gray-800",
      color: "gray",
      popular: false
    },
    {
      name: "Pro",
      description: "For professional developers and growing teams",
      price: {
        monthly: 79,
        yearly: 790
      },
      icon: Rocket,
      features: [
        { name: "Unlimited AI generations", included: true },
        { name: "Advanced refactoring", included: true },
        { name: "Real-time collaboration", included: true },
        { name: "Priority support", included: true },
        { name: "Unlimited team members", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom AI models", included: true },
        { name: "SLA guarantee", included: false }
      ],
      gradient: "from-blue-600 to-purple-600",
      color: "blue",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: {
        monthly: 299,
        yearly: 2990
      },
      icon: Building2,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Dedicated support", included: true },
        { name: "Custom AI training", included: true },
        { name: "On-premise deployment", included: true },
        { name: "Advanced security", included: true },
        { name: "SLA guarantee", included: true },
        { name: "Audit logs", included: true },
        { name: "Custom integrations", included: true }
      ],
      gradient: "from-purple-600 to-pink-600",
      color: "purple",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all plans come with a 14-day free trial. No credit card required."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no questions asked."
    }
  ];

  const handleSubscribe = (planName) => {
    setSelectedPlan(planName);
    // In a real app, this would open a payment modal or redirect to checkout
    console.log(`Subscribe to ${planName} (${billingCycle})`);
  };

  const savings = (monthly, yearly) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full mb-4">
              <CreditCard className="w-4 h-4" />
              <span className="text-sm font-medium">Simple Pricing</span>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Start building smarter with AI-powered development tools
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 group ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                Yearly
                <span className="absolute -top-3 -right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full whitespace-nowrap">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;
            const yearlySavings = savings(plan.price.monthly, plan.price.yearly);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${
                  plan.popular ? 'lg:-mt-4 lg:mb-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-xl">
                      <Star className="w-4 h-4 fill-current" />
                      <span>MOST POPULAR</span>
                    </span>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${
                  plan.popular 
                    ? 'border-blue-500 dark:border-blue-400' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                  {/* Header */}
                  <div className="relative">
                    <div className={`inline-flex p-3 bg-gradient-to-r ${plan.gradient} rounded-xl mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        ${price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                      
                      {billingCycle === 'yearly' && (
                        <div className="mt-2">
                          <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
                            Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${
                            feature.included 
                              ? 'text-gray-700 dark:text-gray-300' 
                              : 'text-gray-400 dark:text-gray-500'
                          }`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleSubscribe(plan.name)}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group/btn ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/30'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Get Started</span>
                        <Rocket className={`w-4 h-4 group-hover/btn:rotate-12 transition-transform ${
                          plan.popular ? 'text-white' : ''
                        }`} />
                      </span>
                      {plan.popular && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">14-day money-back guarantee • No questions asked</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;