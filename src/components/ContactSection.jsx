'use client';
import { MapPin, Phone, Mail, Send, Clock, ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <SectionWrapper id="contact" className="bg-silver/10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-sm font-black tracking-[0.4em] text-accent uppercase">Global Inquiries</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-none">
                            Start a <br /><span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Conversation.</span>
                        </h3>
                    </div>

                    <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-lg">
                        Whether you're looking for export quotations or professional skill training, our specialized team is ready to respond.
                    </p>

                    <div className="space-y-10">
                        {[
                            { icon: MapPin, title: "Operations Hub", val: "19/10, Ramappa Nagar Main Road, Perungudi, Chennai – 600096, TN, India" },
                            { icon: Phone, title: "Institutional Support", val: "+91 96297 72243 / 044-46194597" },
                            { icon: Mail, title: "General Inquiries", val: "info@lakanaenterprises.com" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 10 }}
                                className="flex gap-6 group"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                    <item.icon size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h5 className="font-extrabold text-gray-400 uppercase tracking-widest text-[10px] mb-1">{item.title}</h5>
                                    <p className="text-primary font-bold text-lg leading-tight lg:max-w-xs">{item.val}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/5 flex items-center gap-6">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent"><Clock size={24} /></div>
                        <div className="flex-1">
                            <p className="font-black text-primary text-sm">24H Response Guarantee</p>
                            <p className="text-xs text-gray-500 font-medium">We prioritize official institutional requests within one business day.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-white relative z-10"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/50 ml-2">Your Full Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-silver/5 border border-silver/10 focus:outline-none focus:border-accent transition-all font-bold placeholder:text-gray-300" placeholder="E.g. J. Smith" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/50 ml-2">Email Address</label>
                                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-silver/5 border border-silver/10 focus:outline-none focus:border-accent transition-all font-bold placeholder:text-gray-300" placeholder="smith@company.com" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/50 ml-2">Service Department</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-silver/5 border border-silver/10 focus:outline-none focus:border-accent transition-all font-bold text-primaryAppearance-none">
                                    <option>Skill Development & Training</option>
                                    <option>Exports & Trade Logistics</option>
                                    <option>CSR & Govt. Partnership</option>
                                    <option>General Corporate Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/50 ml-2">Detailed Message</label>
                                <textarea rows="5" className="w-full px-6 py-4 rounded-2xl bg-silver/5 border border-silver/10 focus:outline-none focus:border-accent transition-all font-bold placeholder:text-gray-300 resize-none" placeholder="Describe your requirement..."></textarea>
                            </div>

                            <button className="w-full bg-primary text-white font-black py-6 rounded-2xl shadow-2xl shadow-primary/30 hover:bg-accent transition-all active:scale-[0.98] btn-glow flex items-center justify-center gap-3 tracking-widest uppercase text-sm">
                                TRANSMIT INQUIRY <Send size={20} />
                            </button>
                        </form>
                    </motion.div>

                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10" />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;
