import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CoursesSection } from '@/components/CoursesSection';
import { LabSection } from '@/components/LabSection';
import { ExamsSection } from '@/components/ExamsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <LabSection />
        <ExamsSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
