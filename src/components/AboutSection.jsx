'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, Globe, Users } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const AboutSection = () => {
    const stats = [
        { label: "ISO Certified", value: "9001:2015", icon: Award },
        { label: "MSME Type", value: "Micro", icon: Briefcase },
        { label: "Global Reach", value: "Exports", icon: Globe },
        { label: "Skills Impact", value: "1000+", icon: Users },
    ];

    return (
        <SectionWrapper id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-sm font-bold tracking-widest text-accent uppercase">About Lakana Enterprises</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
                        A Diversified Organization <br /> Driven by Excellence
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Lakana Enterprises is a premier MSME organization in India, uniquely positioned at the intersection of human capital development and global trade. We believe in empowering the Indian workforce with world-class skills while simultaneously delivering high-quality Indian products to the international market.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Aligned with government initiatives (TNSDC, TAHDCO) and certified under ISO 9001:2015, we operate with maximum transparency, credibility, and trust. Whether it's through CSR programs or international exports, we maintain the highest standards of professional integrity.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="p-4 border border-silver/30 rounded-xl bg-white/50">
                                <stat.icon className="text-accent mb-2" size={24} />
                                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square bg-navy-gradient rounded-3xl overflow-hidden relative shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" alt="Corporate Growth" className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 bg-primary/20" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-white/20 rounded-2xl rotate-6" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-accent/30 rounded-2xl -rotate-3" />
                    </div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute -bottom-10 -left-10 bg-white p-6 shadow-2xl rounded-2xl border border-silver/20 hidden md:block"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-primary">MSME Registered</div>
                                <div className="text-xs text-gray-500">UDYAM-TN-02-005XXXX</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
