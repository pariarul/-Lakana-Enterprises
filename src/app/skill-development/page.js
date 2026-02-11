'use client';
import Navbar from '@/components/Navbar';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { CheckCircle, Globe, Users, TrendingUp } from 'lucide-react';

export default function SkillsPage() {
    const highlights = [
        { title: "Government Aligned", desc: "Our programs follow TNSDC and TAHDCO guidelines for maximum impact.", icon: CheckCircle },
        { title: "Industry Ready", desc: "Practical hands-on training that makes candidates job-ready from day one.", icon: TrendingUp },
        { title: "Placement Support", desc: "Connecting our trained professionals with leading organizations.", icon: Users },
        { title: "Global Standards", desc: "Training modules updated to meet international service benchmarks.", icon: Globe },
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 bg-navy-gradient text-white text-center">
                <h1 className="text-5xl font-extrabold mb-4">Skill Development</h1>
                <p className="text-silver/80 max-w-2xl mx-auto px-6">
                    Empowering the youth with vocational training that meets industry standards and creates real career opportunities.
                </p>
            </div>

            <SkillsSection />

            <SectionWrapper className="bg-silver/10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary">Why Train With Us?</h2>
                    <p className="text-gray-500 mt-4">We don't just teach skills; we build careers.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((h, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-silver/10 text-center">
                            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                                <h.icon size={28} />
                            </div>
                            <h4 className="font-bold text-primary mb-3">{h.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
