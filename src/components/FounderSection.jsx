'use client';
import { motion } from 'framer-motion';
import { Quote, Linkedin, Mail } from 'lucide-react';

const FounderSection = () => {
    return (
        <section id="founder" className="py-24 bg-silver/5 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-x-1/2" />

            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[4rem] p-10 lg:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.04)] border border-white flex flex-col lg:flex-row items-center gap-16 lg:gap-24 overflow-hidden relative group">

                    <div className="w-full lg:w-[400px] shrink-0 relative group">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-soft-white"
                        >
                            <img
                                src="/founder.png"    // put founder image in /public folder
                                alt="J. Arivarasan Vijay"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                        </motion.div>

                        {/* Social Float */}
                        <div className="absolute -bottom-6 -right-6 flex flex-col gap-3 z-20">
                            <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-accent transition-colors cursor-pointer"><Linkedin size={24} /></div>
                            <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-xl border border-silver/10 hover:text-accent transition-colors cursor-pointer"><Mail size={24} /></div>
                        </div>
                    </div>

                    <div className="lg:flex-1 space-y-10 relative">
                        <div className="flex flex-col gap-4">
                            <Quote className="text-accent/20 h-16 w-16 -ml-4" />
                            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter leading-tight">
                                Leadership Driven by <br /> <span className="text-accent">Uncompromising Integrity.</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-500 text-xl font-medium italic leading-relaxed">
                                "Our mission is to build a bridge between the potential of Indian skill-seekers and the demands of the global market. We don't just export products; we export Indian quality and trust."
                            </p>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                With a background in Management and Hospitality, J. Arivarasan Vijay established Lakana Enterprises with a core philosophy of 'Quality First'. By integrating skill development with an export division, he has created a circular model of growth that benefits local communities and international buyers alike.
                            </p>
                        </div>

                        <div className="pt-10 border-t border-silver/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div>
                                <h4 className="text-2xl font-black text-primary tracking-tight">J. Arivarasan Vijay</h4>
                                <p className="text-accent font-black uppercase tracking-[0.2em] text-[10px] mt-1">BHM, MBA - Founder & Proprietor</p>
                            </div>
                            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent transition-all shadow-xl shadow-primary/20 active:scale-95 btn-glow">
                                VIEW VISIONARY MESSAGE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
