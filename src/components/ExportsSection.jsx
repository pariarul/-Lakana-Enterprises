'use client';
import { Shirt, ShoppingBag, Globe, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const ExportsSection = () => {
    const exportProducts = [
        { title: "Global Textiles", icon: Shirt, description: "Premium Cotton, Linen, and Sweaters crafted with Indian craftsmanship and modern aesthetics." },
        { title: "Authentic Spices", icon: ShoppingBag, description: "Pure Whole & Ground spices exported globally under the most stringent quality protocols." },
        { title: "Sustainable Palm", icon: Globe, description: "Eco-friendly products derived from native palm varieties, supporting local sustainability." },
        { title: "Quality Foodstuffs", icon: Utensils, description: "Grade-A processed and raw food items optimized for long-distance international transit." },
    ];

    return (
        <SectionWrapper id="exports" className="bg-navy-gradient text-white relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%"><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern><rect width="100%" height="100%" fill="url(#dots)" /></svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24 items-center relative z-10">
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase">Global Trade Force</h2>
                        <h3 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                            Exporting Indian <br /> <span className="text-accent underline decoration-accent/30 underline-offset-8">Excellence.</span>
                        </h3>
                    </div>

                    <p className="text-silver/70 text-xl font-medium leading-relaxed max-w-xl">
                        Lakana Exports is a strategic trade entity dedicated to the seamless delivery of high-value Indian commodities to the international theatre.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                            'Global Quality Benchmarks',
                            'Ethical Sourcing Chain',
                            'ISO 9001:2015 Process',
                            'High-Velocity Logistics'
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 group cursor-default"
                            >
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    <CheckCircle2 size={14} strokeWidth={3} />
                                </div>
                                <span className="font-bold text-silver/80 group-hover:text-white transition-colors">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <button className="flex items-center gap-3 font-black text-sm tracking-widest text-accent uppercase hover:gap-6 transition-all duration-300">
                        VIEW EXPORT CATALOG <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {exportProducts.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-dark p-10 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all cursor-default group"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                <p.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-accent transition-colors">{p.title}</h4>
                            <p className="text-silver/50 text-sm font-medium leading-relaxed">{p.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer Category Bar */}
            <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-12 border border-white/10 relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none"><Globe size={120} /></div>
                <h4 className="text-2xl font-black mb-8 text-center text-silver">Specialized Export Portfolio</h4>
                <div className="flex flex-wrap justify-center gap-5">
                    {['Premium Cotton', 'Pure Linen', 'Cashmere Sweaters', 'Kashmiri Spices', 'Organic Ground Spices', 'Palm Artisanal Crafts'].map((tag, i) => (
                        <motion.span
                            key={i}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            className="px-8 py-3 bg-white/10 rounded-full text-sm font-black uppercase tracking-widest border border-white/10 transition-colors"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ExportsSection;
