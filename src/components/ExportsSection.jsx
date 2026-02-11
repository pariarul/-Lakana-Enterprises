'use client';
import { Shirt, ShoppingBag, Globe, Utensils, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const ExportsSection = () => {
    const exportProducts = [
        { title: "Textiles", icon: Shirt, description: "Premium Cotton, Linen, and Sweaters crafted with Indian craftsmanship." },
        { title: "Indian Spices", icon: ShoppingBag, description: "Authentic Whole & Ground spices exported globally under strict quality control." },
        { title: "Palm Products", icon: Globe, description: "Sustainable and eco-friendly products derived from native palm varieties." },
        { title: "Food Products", icon: Utensils, description: "Grade-A processed and raw food items for international markets." },
    ];

    return (
        <SectionWrapper id="exports" className="bg-navy-gradient text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-center">
                <div>
                    <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Global Reach</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Exporting Indian Quality <br /> to the World</h3>
                    <p className="text-silver/80 text-lg mb-8 leading-relaxed">
                        Lakana Exports is dedicated to sourcing and delivering premium Indian products to global markets. We adhere to international export standards and maintain a rigorous quality assurance process.
                    </p>
                    <div className="space-y-4">
                        {['Global Quality Standards', 'Sustainable Sourcing', 'ISO 9001 Compliance', 'Efficient Supply Chain'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <CheckCircle2 size={16} />
                                </div>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exportProducts.map((p, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-default group">
                            <p.icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                            <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                            <p className="text-silver/60 text-sm leading-relaxed">{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quality Section */}
            <div className="bg-white/5 rounded-3xl p-10 border border-white/10 text-center">
                <h4 className="text-2xl font-bold mb-6">Our Export Categories Include</h4>
                <div className="flex flex-wrap justify-center gap-4">
                    {['Cotton', 'Linen', 'Sweaters', 'Whole Spices', 'Ground Spices', 'Palm Leaf Crafts'].map((tag, i) => (
                        <span key={i} className="px-6 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10">{tag}</span>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ExportsSection;
