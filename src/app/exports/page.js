'use client';
import Navbar from '@/components/Navbar';
import ExportsSection from '@/components/ExportsSection';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { ShieldCheck, Truck, Package, BadgeCheck } from 'lucide-react';

export default function ExportsPage() {
    const features = [
        { title: "Quality Assurance", desc: "Rigorous testing and inspection before every shipment.", icon: ShieldCheck },
        { title: "Global Logistics", desc: "Seamless transport and customs clearance worldwide.", icon: Truck },
        { title: "Custom Packaging", desc: "Professional export-grade packaging tailored to the product.", icon: Package },
        { title: "Certified Indian Produce", desc: "Authentic Indian origin products with full trackability.", icon: BadgeCheck },
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 bg-navy-gradient text-white text-center">
                <h1 className="text-5xl font-extrabold mb-4">Lakana Exports</h1>
                <p className="text-silver/80 max-w-2xl mx-auto px-6">
                    Premium Indian products exported with integrity, quality, and global compliance.
                </p>
            </div>

            <ExportsSection />

            <SectionWrapper className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-primary leading-tight">Our Export Excellence <br /> Commitment</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            At Lakana Exports, we understand the nuances of international trade. Our export division is built on the pillars of consistency, reliability, and stringent quality control. We specialize in sourcing the finest Indian textiles, spices, and sustainable products, ensuring they reach global buyers in pristine condition.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-4">
                                    <f.icon className="text-accent shrink-0" size={24} />
                                    <div>
                                        <h5 className="font-bold text-primary">{f.title}</h5>
                                        <p className="text-sm text-gray-500">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-xl group-hover:bg-accent/30 transition-all opacity-0 group-hover:opacity-100" />
                        <img
                            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000"
                            alt="Global Export Logistics"
                            className="w-full h-96 object-cover rounded-3xl relative shadow-2xl"
                        />
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </main>
    );
}
