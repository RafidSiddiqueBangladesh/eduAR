import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Start Your Journey
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform{' '}
            <span className="gradient-text">How You Learn?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join thousands of students already experiencing the future of education. 
            Get instant access to 3D lessons, AI tutoring, and smart assessments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              Talk to Sales
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Free tier available • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
