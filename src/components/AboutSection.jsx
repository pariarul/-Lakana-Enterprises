'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, Globe, Users, TrendingUp } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const AboutSection = () => {
    const stats = [
        { label: "ISO Certified", value: "9001:2015", icon: Award, color: "text-accent" },
        { label: "MSME Group", value: "Micro", icon: Briefcase, color: "text-primary" },
        { label: "Trade Footprint", value: "Global", icon: Globe, color: "text-accent" },
        { label: "Skills Impacted", value: "1000+", icon: Users, color: "text-primary" },
    ];

    return (
        <SectionWrapper id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="h-1 w-20 bg-accent rounded-full"
                        />
                        <h2 className="text-sm font-black tracking-[0.3em] text-accent uppercase">Institutional Legacy</h2>
                        <h3 className="text-4xl md:text-6xl font-black leading-[1.1] text-primary tracking-tighter">
                            Bridging Excellence <br /> Across <span className="text-accent">Continents.</span>
                        </h3>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-500 text-xl font-medium leading-relaxed">
                            Lakana Enterprises stands as a beacon of Indian MSME innovation. Strategically positioned at the nexus of human capital expansion and high-velocity trade.
                        </p>
                        <div className="space-y-4">
                            {[
                                "ISO 9001:2015 Quality Management Systems",
                                "Official Government Alignment (TNSDC & TAHDCO)",
                                "MSME UDYAM Registered Professional Entity"
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="text-accent" size={20} strokeWidth={3} />
                                    <span className="font-bold text-primary/80">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-10">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-8 border border-silver/20 rounded-[2rem] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] group transition-all duration-300"
                            >
                                <stat.icon className={`${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`} size={32} />
                                <div className="text-3xl font-black text-primary mb-1 tracking-tight">{stat.value}</div>
                                <div className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative lg:pl-10">
                    {/* Decorative elements */}
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                    <div className="aspect-[4/5] bg-navy-gradient rounded-[3rem] overflow-hidden relative shadow-[0_50px_100px_rgba(30,42,90,0.2)]">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                            alt="Corporate Architecture"
                            className="w-full h-full object-cover opacity-70 transition-transform duration-1000 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                        <div className="absolute bottom-10 left-10 right-10 p-8 glass-dark rounded-[2rem] border-white/10">
                            <p className="text-white font-bold leading-snug text-lg">
                                "Elevating India's export capability through rigorous skill development and international quality standards."
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-10 h-1 bg-accent rounded-full" />
                                <span className="text-accent text-xs font-black uppercase tracking-widest">Global Philosophy</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 bg-white p-10 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-[2.5rem] border border-silver/20 hidden xl:block"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white shadow-xl shadow-accent/40">
                                <TrendingUp size={32} />
                            </div>
                            <div>
                                <div className="font-black text-2xl text-primary leading-none">100%</div>
                                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Audit Compliance</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
