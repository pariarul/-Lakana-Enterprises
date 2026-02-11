'use client';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const ContactSection = () => {
    return (
        <SectionWrapper id="contact" className="bg-silver/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <h2 className="text-4xl font-extrabold text-primary">Get in Touch</h2>
                    <p className="text-gray-600 text-lg">
                        Have a query about our skill programs or interested in our export products? Our team is ready to assist you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0"><MapPin size={24} /></div>
                            <div>
                                <h5 className="font-bold text-primary">Office Address</h5>
                                <p className="text-gray-500">19/10, Ramappa Nagar Main Road, Perungudi, Chennai – 600096, Tamil Nadu, India</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0"><Phone size={24} /></div>
                            <div>
                                <h5 className="font-bold text-primary">Call Us</h5>
                                <p className="text-gray-500">004-46494597 / +91 96297 72243</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0"><Mail size={24} /></div>
                            <div>
                                <h5 className="font-bold text-primary">Email</h5>
                                <p className="text-gray-500">info@lakanaenterprises.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-64 rounded-3xl overflow-hidden shadow-inner border border-silver/30 grayscale contrast-125 opacity-70">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9623864149!2d80.240!3d12.964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzUwLjQiTiA4MMKwMTQnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="bg-white p-10 lg:p-14 rounded-3xl shadow-2xl border border-white">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-silver/5 border border-silver/20 focus:outline-none focus:border-accent" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-silver/5 border border-silver/20 focus:outline-none focus:border-accent" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary">Subject</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-silver/5 border border-silver/20 focus:outline-none focus:border-accent">
                                <option>Skill Development Inquiry</option>
                                <option>Export Quotation</option>
                                <option>CSR Partnership</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary">Message</label>
                            <textarea rows="5" className="w-full px-4 py-3 rounded-xl bg-silver/5 border border-silver/20 focus:outline-none focus:border-accent" placeholder="How can we help you?"></textarea>
                        </div>
                        <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-secondary transition-all active:scale-[0.98] btn-glow">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;
