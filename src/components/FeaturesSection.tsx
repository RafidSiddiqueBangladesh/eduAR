import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { 
  Bot, 
  BarChart3, 
  Users, 
  Gamepad2, 
  Download, 
  Languages,
  Shield,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Personal Tutor',
    description: 'Get 24/7 help with an AI that adapts to your learning style and answers any question',
    color: 'from-primary to-cyan-400',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Track progress with detailed insights, skill gap analysis, and personalized recommendations',
    color: 'from-secondary to-violet-400',
  },
  {
    icon: Users,
    title: 'Teacher Dashboard',
    description: 'Powerful tools for educators to create courses, monitor students, and manage classes',
    color: 'from-accent to-orange-400',
  },
  {
    icon: Gamepad2,
    title: 'Gamified Learning',
    description: 'Earn badges, compete in challenges, and unlock achievements as you learn',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Download,
    title: 'Offline Mode',
    description: 'Download lessons and practice offline—perfect for learning on the go',
    color: 'from-rose-500 to-pink-400',
  },
  {
    icon: Languages,
    title: 'Multi-Language',
    description: 'Learn in your preferred language with support for 20+ languages',
    color: 'from-amber-500 to-yellow-400',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with role-based access and data protection',
    color: 'from-blue-500 to-indigo-400',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for seamless learning on any device',
    color: 'from-fuchsia-500 to-purple-400',
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
      
      <div className="container px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete learning ecosystem designed for students, teachers, and institutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
