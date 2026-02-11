'use client';

import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Linkedin,
    Twitter,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6 lg:px-12">

                {/* ================= TOP GRID ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* ---------- About ---------- */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3">
                            <motion.div whileHover={{ rotate: [0, -10, 10, 0] }}>
                                <Image
                                    src="/logo.png"
                                    alt="Lakana Enterprises Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                            <span className="font-black text-xl lg:text-2xl text-white">
                                Lakana <span className="text-accent">Enterprises</span>
                            </span>
                        </Link>

                        <p className="text-silver/80 text-sm leading-relaxed">
                            ISO 9001:2015 Certified MSME organization dedicated to excellence
                            in skill development and international trade. Bridging the gap
                            between quality education and global market exports.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                hover:bg-white/10 transition"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                hover:bg-white/10 transition"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                hover:bg-white/10 transition"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* ---------- Quick Links ---------- */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-silver/80 text-sm">
                            <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>
                            <li><Link href="/skill-development" className="hover:text-accent transition">Skill Development</Link></li>
                            <li><Link href="/exports" className="hover:text-accent transition">Lakana Exports</Link></li>
                            <li><Link href="/certifications" className="hover:text-accent transition">Certifications</Link></li>
                        </ul>
                    </div>

                    {/* ---------- Services ---------- */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-4 text-silver/80 text-sm">
                            <li>Hospitality Management</li>
                            <li>Facility Management</li>
                            <li>Textile Exports</li>
                            <li>Indian Spices</li>
                            <li>CSR Partnerships</li>
                        </ul>
                    </div>

                    {/* ---------- Contact ---------- */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6 text-silver/80 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-accent shrink-0" size={18} />
                                <span>
                                    19/10, Ramappa Nagar Main Road,<br />
                                    Perungudi, Chennai – 600096,<br />
                                    Tamil Nadu, India
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-accent shrink-0" size={18} />
                                <span>
                                    004-46494597<br />
                                    +91 96297 72243
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-accent shrink-0" size={18} />
                                <span>info@lakanaenterprises.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ================= BOTTOM BAR ================= */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row
        justify-between items-center gap-4 text-xs uppercase tracking-widest
        text-silver/50">
                    <p>
                        © {new Date().getFullYear()} Lakana Enterprises
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-accent transition">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-accent transition">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
