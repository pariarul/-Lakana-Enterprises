'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Information We Collect",
            icon: <Eye className="text-accent" size={24} />,
            content: "We collect personal information that you provide to us, such as your name, address, contact information, and payment details when you use our services or contact us. We also collect certain information automatically when you visit our website, including your IP address, browser type, and operating system."
        },
        {
            title: "2. How We Use Your Information",
            icon: <Lock className="text-accent" size={24} />,
            content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations. This includes processing exports, managing skill development programs, and responding to inquiries."
        },
        {
            title: "3. Information Sharing",
            icon: <Shield className="text-accent" size={24} />,
            content: "We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. This may include sharing with logistics partners for exports or certification bodies."
        },
        {
            title: "4. Data Security",
            icon: <Shield className="text-accent" size={24} />,
            content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure."
        },
        {
            title: "5. Your Rights",
            icon: <FileText className="text-accent" size={24} />,
            content: "You have the right to access, correct, or delete your personal information. You can также object to or restrict certain processing of your information. To exercise these rights, please contact us at info@lakanaenterprises.com."
        },
        {
            title: "6. Changes to This Policy",
            icon: <Bell className="text-accent" size={24} />,
            content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date."
        }
    ];

    return (
        <main className="min-h-screen bg-silver/5">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl lg:text-6xl font-black mb-6">
                            Privacy <span className="text-accent">Policy</span>
                        </h1>
                        <p className="text-silver/80 text-lg">
                            Your privacy is important to us. Learn how Lakana Enterprises collects, uses, and protects your information.
                        </p>
                        <div className="mt-8 text-silver/50 text-sm uppercase tracking-widest">
                            Last Updated: February 2026
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-12 border border-silver/20">
                            <div className="prose prose-lg max-w-none text-primary/80">
                                <p className="mb-12 text-xl leading-relaxed">
                                    At Lakana Enterprises, accessible from lakanaenterprises.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Lakana Enterprises and how we use it.
                                </p>

                                <div className="grid gap-12">
                                    {sections.map((section, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex flex-col md:flex-row gap-6 items-start"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                                                {section.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-primary mb-3">{section.title}</h2>
                                                <p className="leading-relaxed">{section.content}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-primary mb-4 text-center">Contact Us</h2>
                                    <p className="text-center mb-6">
                                        If you have any questions about our Privacy Policy, do not hesitate to contact us:
                                    </p>
                                    <div className="flex flex-col md:flex-row justify-center gap-8 items-center font-bold text-primary">
                                        <a href="mailto:info@lakanaenterprises.com" className="hover:text-accent transition">info@lakanaenterprises.com</a>
                                        <a href="tel:+919629772243" className="hover:text-accent transition">+91 96297 72243</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
