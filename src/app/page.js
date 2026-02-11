'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FounderSection from '@/components/FounderSection';
import SkillsSection from '@/components/SkillsSection';
import ExportsSection from '@/components/ExportsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <FounderSection />
      <SkillsSection />
      <ExportsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
