import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Brain, Target, Clock, Trophy, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const examCategories = [
  { name: 'School Boards', exams: ['CBSE', 'ICSE', 'State Boards'], count: '1-12' },
  { name: 'Engineering', exams: ['JEE Main', 'JEE Advanced', 'BITSAT'], count: '100K+' },
  { name: 'Medical', exams: ['NEET', 'AIIMS', 'JIPMER'], count: '80K+' },
  { name: 'International', exams: ['SAT', 'ACT', 'AP Exams'], count: '50K+' },
];

const assessmentFeatures = [
  {
    icon: Brain,
    title: 'AI-Generated Tests',
    description: 'Smart question papers tailored to your learning progress and weak areas',
  },
  {
    icon: Target,
    title: 'Precision Analytics',
    description: 'Deep insights into performance patterns and improvement areas',
  },
  {
    icon: Clock,
    title: 'Timed Mock Exams',
    description: 'Simulate real exam conditions with adaptive difficulty',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Visual dashboards showing your learning journey over time',
  },
];

export function ExamsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="exams" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Smart Assessments
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            AI-Powered <span className="gradient-text">Exam Prep</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Adaptive tests that evolve with you. Get personalized question papers, 
            instant feedback, and data-driven study plans.
          </p>
        </motion.div>

        {/* Exam Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {examCategories.map((category, index) => (
            <div
              key={category.name}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="font-display text-3xl font-bold gradient-text mb-2">
                {category.count}
              </div>
              <h3 className="font-semibold mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {category.exams.map((exam) => (
                  <span
                    key={exam}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {exam}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {assessmentFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Mock Test Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold">Physics Mock Test</h3>
                  <p className="text-sm text-muted-foreground">JEE Advanced Pattern</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  <Clock className="w-4 h-4" />
                  3 hrs
                </div>
              </div>

              {/* Mock Question Preview */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs px-2 py-1 rounded bg-secondary/20 text-secondary">
                      Q.15
                    </span>
                    <span className="text-xs text-muted-foreground">4 marks</span>
                  </div>
                  <p className="text-sm mb-3">
                    A particle is projected with velocity v₀ at angle θ with horizontal. Find the radius of curvature at the highest point...
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {['(A) v₀²/g', '(B) v₀²cos²θ/g', '(C) v₀²sin²θ/g', '(D) v₀²/gcosθ'].map((option, i) => (
                      <button
                        key={i}
                        className="text-left text-sm p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">15/60 Questions</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden mb-6">
                <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-primary to-secondary" />
              </div>

              <Button variant="hero" className="w-full">
                <Trophy className="w-5 h-5 mr-2" />
                Start Mock Test
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
