'use client';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Page Header */}
            <div className="pt-32 pb-20 bg-navy-gradient text-white text-center">
                <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
                <p className="text-silver/80 max-w-2xl mx-auto px-6">
                    Bridging the gap between Indian talent and global markets through excellence in skill development and international trade.
                </p>
            </div>

            <AboutSection />

            <SectionWrapper className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-10 rounded-3xl bg-silver/5 border border-silver/10 hover:shadow-xl transition-all">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower individuals through world-class vocational training and deliver premium Indian quality to every corner of the globe.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-silver/5 border border-silver/10 hover:shadow-xl transition-all">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be the most trusted MSME organization in India, recognized for our commitment to quality, integrity, and sustainable growth.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-silver/5 border border-silver/10 hover:shadow-xl transition-all">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Excellence, Transparency, Hard Work, and Global Trust define everything we do from training classrooms to export containers.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
