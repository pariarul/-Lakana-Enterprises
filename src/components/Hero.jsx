'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-gradient pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        x: [0, -40, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-secondary/30 rounded-full blur-[120px]"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-6 relative z-10 text-center"
            >


                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter"
                >
                    Empowering <span className="text-accent">Skills</span> <br className="hidden md:block" />
                    Enabling <span className="text-silver">Trade</span> <br className="hidden md:block" />
                    Building <span>
                        Global Trust
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="absolute bottom-2 left-0 h-2 bg-accent/30 -z-10"
                        />
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl text-silver/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Strategically bridging the gap between Indian vocational excellence and global market demands with uncompromising quality and integrity.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <Link href="/skill-development" className="group bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-accent hover:text-white transition-all shadow-2xl shadow-black/40 flex items-center gap-3 active:scale-95 btn-glow">
                        EXPLORE SERVICES <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <Link href="/contact" className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95">
                        GET IN TOUCH
                    </Link>
                </motion.div>

                {/* Floating Icons Animation */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-10 text-white/10"><Globe size={120} /></motion.div>
                    <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/4 right-10 text-white/10"><Shield size={100} /></motion.div>
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 right-1/4 text-accent/20"><Sparkles size={60} /></motion.div>
                </div>
            </motion.div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 w-full rotate-180 pointer-events-none">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="fill-soft-white opacity-20 h-auto w-full">
                    <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
