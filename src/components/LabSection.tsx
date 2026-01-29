import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Glasses, Atom, Dna, FlaskConical, Box, Rotate3D } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/Scene3D';

const labFeatures = [
  {
    icon: Glasses,
    title: 'VR Classrooms',
    description: 'Step into virtual classrooms and labs from anywhere in the world',
  },
  {
    icon: Atom,
    title: 'Atomic Models',
    description: 'Explore molecular structures and atomic bonds in 3D',
  },
  {
    icon: Dna,
    title: 'Biology Simulations',
    description: 'Dissect, analyze, and understand biological systems',
  },
  {
    icon: FlaskConical,
    title: 'Virtual Experiments',
    description: 'Conduct safe chemistry experiments with realistic outcomes',
  },
  {
    icon: Box,
    title: '3D Geometry',
    description: 'Manipulate shapes and understand spatial relationships',
  },
  {
    icon: Rotate3D,
    title: 'Physics Sandbox',
    description: 'Test physics principles with interactive simulations',
  },
];

export function LabSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lab" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent rounded-full blur-2xl" />
              
              {/* 3D Canvas */}
              <div className="relative glass-card rounded-3xl overflow-hidden h-full">
                <Scene3D variant="dna" />
                
                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">DNA Helix Model</h4>
                      <p className="text-sm text-muted-foreground">Interactive 3D Visualization</p>
                    </div>
                    <Button variant="glass" size="sm">
                      <Rotate3D className="w-4 h-4 mr-2" />
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              3D Learning Lab
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Experience Learning in{' '}
              <span className="gradient-text">Virtual Reality</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Step into our immersive 3D lab where abstract concepts become tangible experiences. 
              Rotate molecules, conduct experiments, and explore the universe—all from your device.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {labFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              <Glasses className="w-5 h-5 mr-2" />
              Enter VR Lab
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
