'use client';
import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const CertificationsSection = () => {
    return (
        <SectionWrapper id="certifications">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-sm font-bold tracking-widest text-accent uppercase">Credibility & Trust</h2>
                <h3 className="text-4xl font-extrabold text-primary">Official Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-10 rounded-3xl shadow-xl border-4 border-silver/10 flex flex-col items-center text-center space-y-6"
                >
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                        <Award size={48} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-primary mb-2">ISO 9001:2015</h4>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Quality Management System</p>
                    </div>
                    <p className="text-sm text-gray-600">Certified for excellence in providing skill development services and managing export operations with international standards.</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-10 rounded-3xl shadow-xl border-4 border-silver/10 flex flex-col items-center text-center space-y-6"
                >
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                        <Briefcase size={48} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-primary mb-2">UDYAM MSME</h4>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Registration: UDYAM-TN-02-XXXX</p>
                    </div>
                    <p className="text-sm text-gray-600">Registerd as a Micro Enterprise under the Ministry of MSME, Govt. of India, ensuring governmental alignment and trust.</p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default CertificationsSection;
