'use client';
import { motion } from 'framer-motion';
import { Award, Briefcase, ShieldCheck, CheckCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const CertificationsSection = () => {
    return (
        <SectionWrapper id="certifications">
            <div className="text-center mb-20 space-y-4">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto h-1 w-20 bg-accent rounded-full mb-6"
                />
                <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase">Institutional Credibility</h2>
                <h3 className="text-4xl md:text-6xl font-black text-primary tracking-tighter">Official Validations.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-silver/10 flex flex-col items-center text-center space-y-8 relative group overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 text-primary/5 -mr-8 -mt-8"><ShieldCheck size={160} /></div>

                    <div className="w-28 h-28 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner overflow-hidden relative">
                        <Award size={56} strokeWidth={1.5} className="relative z-10" />
                    </div>

                    <div className="space-y-4 relative z-10">
                        <h4 className="text-3xl font-black text-primary tracking-tight">ISO 9001:2015</h4>
                        <p className="inline-flex items-center gap-2 text-accent uppercase tracking-[0.2em] text-[10px] font-black">
                            <CheckCircle size={14} /> Quality Management System
                        </p>
                    </div>

                    <p className="text-gray-500 font-medium leading-relaxed relative z-10">
                        Our operations are certified by international benchmarks, ensuring excellence in skill development services and managing complex global export frameworks with total precision.
                    </p>

                    <button className="flex items-center gap-2 text-primary font-black text-[10px] tracking-widest uppercase hover:text-accent transition-colors">
                        View Certification PDF
                    </button>
                </motion.div>

                <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-silver/10 flex flex-col items-center text-center space-y-8 relative group overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 text-primary/5 -mr-8 -mt-8"><Briefcase size={160} /></div>

                    <div className="w-28 h-28 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner overflow-hidden relative">
                        <Briefcase size={56} strokeWidth={1.5} className="relative z-10" />
                    </div>

                    <div className="space-y-4 relative z-10">
                        <h4 className="text-3xl font-black text-primary tracking-tight">UDYAM MSME</h4>
                        <p className="inline-flex items-center gap-2 text-accent uppercase tracking-[0.2em] text-[10px] font-black">
                            <CheckCircle size={14} /> Govt. of India Registered
                        </p>
                    </div>

                    <p className="text-gray-500 font-medium leading-relaxed relative z-10">
                        Lakana Enterprises is an officially recognized Micro Enterprise. This registration guarantees our alignment with national growth initiatives and institutional trust in all government-linked tenders.
                    </p>

                    <div className="text-primary/30 font-black text-[10px] tracking-widest uppercase">
                        Reg No: UDYAM-TN-02-XXXXXXX
                    </div>
                </motion.div>
            </div>

            <div className="mt-20 pt-10 border-t border-silver/10 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder for real logos like TNSDC, MSME etc if available */}
                <div className="font-black text-2xl tracking-tighter">TNSDC</div>
                <div className="font-black text-2xl tracking-tighter">TAHDCO</div>
                <div className="font-black text-2xl tracking-tighter">UDYAM</div>
                <div className="font-black text-2xl tracking-tighter">ISO CERT</div>
            </div>
        </SectionWrapper>
    );
};

export default CertificationsSection;
