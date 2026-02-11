'use client';
import Navbar from '@/components/Navbar';
import FounderSection from '@/components/FounderSection';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { Award, GraduationCap, Briefcase } from 'lucide-react';

export default function FounderPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 bg-navy-gradient text-white text-center">
                <h1 className="text-5xl font-extrabold mb-4">Our Founder</h1>
                <p className="text-silver/80 max-w-2xl mx-auto px-6">
                    Meet the visionary leadership driving Lakana Enterprises towards global standards.
                </p>
            </div>

            <FounderSection />

            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="border-l-4 border-accent pl-8 py-4">
                        <h2 className="text-3xl font-bold text-primary mb-6">Professional Philosophy</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            J. Arivarasan Vijay believes that the strength of an enterprise lies in its people. By combining his expertise in Hospitality and Management, he has designed a unique corporate structure where skill acquisition directly feeds into high-quality production and trade operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                        <div className="flex flex-col items-center text-center p-6 bg-silver/5 rounded-2xl">
                            <GraduationCap className="text-accent mb-4" size={40} />
                            <h4 className="font-bold text-primary">Academic Excellence</h4>
                            <p className="text-sm text-gray-500">BHM, MBA - Dual Specialization in Operations & Hospitality</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-silver/5 rounded-2xl">
                            <Briefcase className="text-accent mb-4" size={40} />
                            <h4 className="font-bold text-primary">Industry Expertise</h4>
                            <p className="text-sm text-gray-500">Over a decade of experience in facility and hotel management</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-silver/5 rounded-2xl">
                            <Award className="text-accent mb-4" size={40} />
                            <h4 className="font-bold text-primary">Leadership</h4>
                            <p className="text-sm text-gray-500">Committed to MSME growth and Indian export potential</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
