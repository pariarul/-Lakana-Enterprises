import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* About */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white text-primary rounded flex items-center justify-center font-bold">L</div>
                            <span className="font-bold text-xl">Lakana Enterprises</span>
                        </div>
                        <p className="text-silver/80 text-sm leading-relaxed">
                            ISO 9001:2015 Certified MSME organization dedicated to excellence in skill development and international trade. Bridging the gap between quality education and global market exports.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-silver/80 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#skills" className="hover:text-accent transition-colors">Skill Development</a></li>
                            <li><a href="#exports" className="hover:text-accent transition-colors">Lakana Exports</a></li>
                            <li><a href="#certifications" className="hover:text-accent transition-colors">Certifications</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-4 text-silver/80 text-sm">
                            <li>Hospitality Management</li>
                            <li>Facility Management</li>
                            <li>Textile Exports</li>
                            <li>Indian Spices</li>
                            <li>CSR Partnerships</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6 text-silver/80 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-accent shrink-0" size={18} />
                                <span>19/10, Ramappa Nagar Main Road,<br />Perungudi, Chennai – 600096,<br />Tamil Nadu, India</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-accent shrink-0" size={18} />
                                <span>004-46494597<br />+91 96297 72243</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-accent shrink-0" size={18} />
                                <span>info@lakanaenterprises.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs tracking-widest uppercase font-medium text-silver/50">
                    <p>© {new Date().getFullYear()} Lakana Enterprises – ISO 9001:2015 Certified</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent">Privacy Policy</a>
                        <a href="#" className="hover:text-accent">Terms of service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
