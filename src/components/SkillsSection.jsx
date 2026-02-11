'use client';
import { BedDouble, Briefcase, Utensils, Shirt, Sparkles, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Card from './Card';

const SkillsSection = () => {
    const skills = [
        { title: "Hospitality & Hotel Mgt", icon: BedDouble, description: "Professional training for the global tourism and hotel industry." },
        { title: "Housekeeping & Facility Mgt", icon: Briefcase, description: "Mastering the standards of corporate and residential facility care." },
        { title: "Food & Beverage Service", icon: Utensils, description: "Excellence in culinary services and banquet management." },
        { title: "Apparel & Designing", icon: Shirt, description: "Vocational skills in textile design and garment production." },
        { title: "Beauty & Wellness", icon: Sparkles, description: "Modern therapy and aesthetic care professional training." },
        { title: "Emerging Skills", icon: Zap, description: "Adaptive programs for modern digital and industrial requirements." },
    ];

    return (
        <SectionWrapper id="skills" className="bg-white">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase">Empowering People</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary">Skill Development Programs</h3>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Goverment-aligned vocational training programs designed to bridge the skill gap and create industry-ready professionals.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, idx) => (
                    <Card
                        key={idx}
                        title={skill.title}
                        description={skill.description}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default SkillsSection;
