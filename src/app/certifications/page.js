'use client';
import Navbar from '@/components/Navbar';
import CertificationsSection from '@/components/CertificationsSection';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { FileText, Shield, CheckCircle } from 'lucide-react';

export default function CertificationsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 bg-navy-gradient text-white text-center">
                <h1 className="text-5xl font-extrabold mb-4">Certifications</h1>
                <p className="text-silver/80 max-w-2xl mx-auto px-6">
                    Our commitment to quality and institutional standards is backed by official government and international certifications.
                </p>
            </div>

            <CertificationsSection />

            <SectionWrapper className="bg-silver/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary">Compliance & Standards</h2>
                        <p className="text-gray-500 mt-4">We adhere to the highest regulatory standards in India and abroad.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl flex flex-col md:row items-center gap-8 border border-silver/20 hover:shadow-lg transition-all">
                            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                                <Shield size={32} />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="text-xl font-bold text-primary mb-2">ISO 9001:2015 Certification</h4>
                                <p className="text-gray-600">The Gold Standard for Quality Management Systems. This certification ensures that all our internal processes, from candidate registration in skill programs to the final dispatch of export goods, meet international quality benchmarks.</p>
                            </div>
                            <div className="px-6 py-2 bg-green-50 text-green-700 rounded-full font-bold text-sm flex items-center gap-2">
                                <CheckCircle size={16} /> Verified
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl flex flex-col md:row items-center gap-8 border border-silver/20 hover:shadow-lg transition-all">
                            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                                <FileText size={32} />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="text-xl font-bold text-primary mb-2">MSME UDYAM Registration</h4>
                                <p className="text-gray-600">Being a registered Micro Enterprise allows us to leverage government benefits, participate in tenders, and provides us with a verified legal standing as a key player in the Indian MSME landscape.</p>
                            </div>
                            <div className="px-6 py-2 bg-green-50 text-green-700 rounded-full font-bold text-sm flex items-center gap-2">
                                <CheckCircle size={16} /> Verified
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
