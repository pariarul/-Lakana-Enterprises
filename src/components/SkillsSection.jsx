'use client';
import { BedDouble, Briefcase, Utensils, Shirt, Sparkles, Zap, GraduationCap, ArrowUpRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const skills = [
        { title: "Hospitality & Hotel Mgt", icon: BedDouble, description: "Advanced curriculum for global tourism standards and professional hotel operations." },
        { title: "Housekeeping & Facility Mgt", icon: Briefcase, description: "Mastering the logistics of corporate environments and high-end residential care." },
        { title: "Food & Beverage Service", icon: Utensils, description: "Elite level culinary services, mixology, and banquet management protocols." },
        { title: "Apparel & Designing", icon: Shirt, description: "Vocational expertise in textile engineering, fashion design, and mass production." },
        { title: "Beauty & Wellness", icon: Sparkles, description: "Clinical aesthetics, modern therapy techniques, and wellness spa management." },
        { title: "Emerging Tech Skills", icon: Zap, description: "Adaptive industrial training for digital literacy and next-generation manufacturing." },
    ];

    return (
        <SectionWrapper id="skills" className="bg-white relative">
            <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none hidden lg:block">
                <GraduationCap size={400} />
            </div>

            <div className="text-center mb-24 space-y-6">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    className="h-1 bg-accent mx-auto rounded-full"
                />
                <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase">Institutional Training</h2>
                <h3 className="text-4xl md:text-7xl font-black text-primary tracking-tighter leading-none">
                    Skill Development <br /> <span className="text-accent underline decoration-accent/10 underline-offset-[14px]">Infrastructure.</span>
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                    Strategically aligned with TNSDC and TAHDCO to bridge the industrial human capital gap through world-class vocational pedagogy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {skills.map((skill, idx) => (
                    <Card
                        key={idx}
                        title={skill.title}
                        description={skill.description}
                        icon={skill.icon}
                        delay={idx * 0.1}
                    />
                ))}
            </div>

            <div className="mt-24 p-12 lg:p-16 rounded-[4rem] bg-silver/5 border border-silver/10 flex flex-col lg:flex-row items-center justify-between gap-10 group cursor-default">
                <div className="space-y-4 text-center lg:text-left">
                    <h4 className="text-3xl font-black text-primary tracking-tight">Ready to transform your workforce?</h4>
                    <p className="text-gray-500 font-medium">Join our network of institutional partners and government training programs.</p>
                </div>
                <button className="bg-primary text-white px-10 py-5 rounded-[2rem] font-bold text-lg flex items-center gap-3 hover:bg-accent transition-all duration-300 shadow-xl shadow-primary/20 active:scale-95 btn-glow group/btn">
                    PARTNERSHIP INQUIRY <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
            </div>
        </SectionWrapper>
    );
};

export default SkillsSection;
