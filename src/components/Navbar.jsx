'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, PieChart, GraduationCap, Globe2, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 20);
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/', icon: Globe2 },
        { name: 'About Us', href: '/about', icon: PieChart },
        { name: 'Founder', href: '/founder', icon: UsersIcon },
        { name: 'Skills', href: '/skill-development', icon: GraduationCap },
        { name: 'Exports', href: '/exports', icon: Globe2 },
        { name: 'Certifications', href: '/certifications', icon: ShieldCheck },
        { name: 'Contact', href: '/contact', icon: Mail },
    ];

    // Helper because Lucide Icons can't be passed directly easily in some contexts
    function UsersIcon({ size }) { return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>; }

    const isActive = (path) => pathname === path;

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-[100]  duration-500 ${isScrolled
                    ? 'bg-white/80  backdrop-blur-lg shadow-xl py-3 border-b border-silver/20'
                    : 'bg-transparent py-5 lg:py-8'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group relative z-[101]">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            className="w-20 h-20 flex items-center justify-center"
                        >
                            <Image
                                src="/logo.png"   // put logo in /public folder
                                alt="Lakana Enterprises Logo"
                                width={80}
                                height={80}
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className={`font-black text-xl lg:text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-primary'}`}>
                                Lakana <span className="text-accent">Enterprises</span>
                            </span>

                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2">
                        <div className="flex items-center gap-1 mr-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group overflow-hidden ${isActive(link.href)
                                        ? 'text-white bg-primary'
                                        : isScrolled ? 'text-primary hover:bg-silver/10' : 'text-primary hover:bg-silver/10'
                                        }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            ))}
                        </div>
   <Link
      href="https://wa.me/919629772243"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-accent text-white px-8 py-3 rounded-full text-sm font-black shadow-lg shadow-accent/20 hover:bg-secondary hover:shadow-secondary/30 transition-all active:scale-95 btn-glow flex items-center gap-2"
    >
      INQUIRE NOW <ChevronRight size={16} />
    </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isScrolled ? 'bg-primary/5 text-primary' : 'bg-primary/5 text-primary'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[99] bg-white lg:hidden flex flex-col p-8 pt-24"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                            <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
                        </div>

                        <div className="flex flex-col gap-2 relative z-10">
                            <p className="text-[10px] uppercase font-bold tracking-widest text-accent mb-4">Navigation Menu</p>
                            {navLinks.map((link, idx) => {
                                const Icon = link.icon;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`flex items-center justify-between p-4 rounded-2xl transition-all ${isActive(link.href)
                                                ? 'bg-primary text-white shadow-xl shadow-primary/20'
                                                : 'text-primary hover:bg-silver/10'
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive(link.href) ? 'bg-white/20' : 'bg-primary/5'}`}>
                                                    <Icon size={20} />
                                                </div>
                                                <span className="text-xl font-bold">{link.name}</span>
                                            </div>
                                            <ChevronRight size={20} className={isActive(link.href) ? 'opacity-100' : 'opacity-30'} />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-auto p-4 relative z-10">
                            <Link
                                href="/contact"
                                className="w-full bg-accent text-white py-5 rounded-3xl text-center font-black text-lg shadow-xl shadow-accent/20 flex items-center justify-center gap-3"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                GET A QUOTE <ChevronRight size={24} />
                            </Link>
                            <div className="mt-8 flex justify-center gap-8 text-gray-400">
                                <Globe2 size={24} />
                                <ShieldCheck size={24} />
                                <GraduationCap size={24} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
