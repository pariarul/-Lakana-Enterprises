'use client';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 bg-navy-gradient text-white text-center">
                <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
                <p className="text-silver/80 max-w-2xl mx-auto px-6">
                    Reach out to us for inquiries, partnerships, or to learn more about our services.
                </p>
            </div>

            <ContactSection />

            <SectionWrapper className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                            <Clock size={24} />
                        </div>
                        <h4 className="font-bold text-primary">Office Hours</h4>
                        <p className="text-gray-500 text-sm">Monday – Saturday<br />9:00 AM – 6:00 PM IST</p>
                    </div>

                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                            <MessageSquare size={24} />
                        </div>
                        <h4 className="font-bold text-primary">Response Time</h4>
                        <p className="text-gray-500 text-sm">We typically respond to emails within 24 working hours.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                            <ShieldCheck size={24} />
                        </div>
                        <h4 className="font-bold text-primary">Data Security</h4>
                        <p className="text-gray-500 text-sm">Your contact information is safe and will never be shared with third parties.</p>
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
