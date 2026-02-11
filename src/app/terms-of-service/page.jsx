'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Scale, CheckCircle2, AlertCircle, Gavel, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            icon: <CheckCircle2 className="text-secondary" size={24} />,
            content: "By accessing and using the services of Lakana Enterprises, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site or our services."
        },
        {
            title: "2. Use License",
            icon: <Scale className="text-secondary" size={24} />,
            content: "Permission is granted to temporarily download one copy of the materials (information or software) on Lakana Enterprises' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
        },
        {
            title: "3. Service Provision",
            icon: <HelpCircle className="text-secondary" size={24} />,
            content: "Lakana Enterprises provides services in skill development, international trade, and certifications. We reserve the right to modify or discontinue any service with or without notice at any time. All quotations and trade agreements are subject to final confirmation."
        },
        {
            title: "4. Intellectual Property",
            icon: <CheckCircle2 className="text-secondary" size={24} />,
            content: "The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights."
        },
        {
            title: "5. Limitation of Liability",
            icon: <AlertCircle className="text-secondary" size={24} />,
            content: "In no event shall Lakana Enterprises or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lakana Enterprises' website."
        },
        {
            title: "6. Governing Law",
            icon: <Gavel className="text-secondary" size={24} />,
            content: "These terms and conditions are governed by and construed in accordance with the laws of India and specifically the jurisdiction of Chennai, Tamil Nadu, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
        }
    ];

    return (
        <main className="min-h-screen bg-silver/5">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 0 L0 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl lg:text-6xl font-black mb-6">
                            Terms of <span className="text-accent">Service</span>
                        </h1>
                        <p className="text-silver/80 text-lg">
                            Please read these terms and conditions carefully before using Lakana Enterprises services.
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
                                    These Terms of Service govern your use of the Lakana Enterprises website and services. By using our services, you accept these terms in full. If you disagree with these terms or any part of these terms, you must not use our services.
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
                                            <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center shrink-0">
                                                {section.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-primary mb-3">{section.title}</h2>
                                                <p className="leading-relaxed">{section.content}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-16 p-8 bg-secondary/5 rounded-2xl border border-secondary/10">
                                    <h2 className="text-2xl font-bold text-primary mb-4 text-center">Contact Us</h2>
                                    <p className="text-center mb-6">
                                        For any clarification or information regarding our terms, please contact our legal department:
                                    </p>
                                    <div className="flex flex-col md:flex-row justify-center gap-8 items-center font-bold text-primary">
                                        <a href="mailto:legal@lakanaenterprises.com" className="hover:text-secondary transition">legal@lakanaenterprises.com</a>
                                        <a href="tel:+919629772243" className="hover:text-secondary transition">+91 96297 72243</a>
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

export default TermsOfService;
