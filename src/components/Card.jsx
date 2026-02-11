'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Card = ({ title, description, icon: Icon, image, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -12, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            className={`group bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-silver/10 hover:shadow-[0_40px_80px_rgba(30,42,90,0.1)] transition-all duration-500 relative overflow-hidden ${className}`}
        >
            {/* Hover Background Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                    {Icon && (
                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                            <Icon size={32} strokeWidth={1.5} />
                        </div>
                    )}
                    <motion.div
                        whileHover={{ rotate: 45 }}
                        className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500"
                    >
                        <ArrowUpRight size={20} />
                    </motion.div>
                </div>

                {image && (
                    <div className="w-full h-56 mb-8 overflow-hidden rounded-3xl relative">
                        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                )}

                <h3 className="text-2xl font-black mb-4 text-primary tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-500 leading-relaxed font-medium">
                    {description}
                </p>

                {/* Decorative Element */}
                <div className="mt-8 pt-8 border-t border-silver/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    View Program Details <ArrowUpRight size={12} />
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
