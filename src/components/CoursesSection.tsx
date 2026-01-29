import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, GraduationCap, Trophy, Microscope, Calculator, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    icon: Microscope,
    title: 'Science Lab VR',
    level: 'Class 6-12',
    lessons: 120,
    color: 'from-primary to-cyan-400',
    description: 'Interactive virtual experiments in physics, chemistry & biology',
  },
  {
    icon: Calculator,
    title: 'Math Visualizer',
    level: 'All Classes',
    lessons: 200,
    color: 'from-secondary to-violet-400',
    description: '3D geometry, calculus animations & problem-solving AI',
  },
  {
    icon: GraduationCap,
    title: 'JEE/NEET Prep',
    level: 'Competitive',
    lessons: 500,
    color: 'from-accent to-orange-400',
    description: 'AI-powered coaching with adaptive mock tests',
  },
  {
    icon: Globe,
    title: 'Language Arts',
    level: 'Class 1-12',
    lessons: 150,
    color: 'from-emerald-500 to-teal-400',
    description: 'Interactive stories, grammar games & speaking practice',
  },
  {
    icon: BookOpen,
    title: 'History Explorer',
    level: 'Class 5-12',
    lessons: 80,
    color: 'from-amber-500 to-yellow-400',
    description: 'Walk through ancient civilizations in VR',
  },
  {
    icon: Trophy,
    title: 'Skill Challenges',
    level: 'All Levels',
    lessons: 300,
    color: 'from-rose-500 to-pink-400',
    description: 'Competitive coding, puzzles & brain training',
  },
];

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const Icon = course.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="font-display text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
        
        {/* Meta */}
        <div className="flex items-center justify-between text-sm">
          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
            {course.level}
          </span>
          <span className="text-muted-foreground">
            {course.lessons} lessons
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Popular Courses
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="gradient-text">Immersive</span> Learning
          </h2>
          <p className="text-muted-foreground text-lg">
            From school subjects to competitive exams, discover courses designed for deep understanding through 3D visualization and AI guidance.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="hero" size="lg">
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
