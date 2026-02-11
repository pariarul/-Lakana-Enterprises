'use client';

const FounderSection = () => {
    return (
        <section id="founder" className="py-24 bg-silver/10">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-white flex flex-col lg:row items-center gap-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32" />

                    <div className="w-full lg:w-1/3 shrink-0 flex flex-col items-center">
                        <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-6">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Founder" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-2xl font-bold text-primary">J. Arivarasan Vijay</h4>
                        <p className="text-accent font-medium uppercase tracking-widest text-xs">BHM, MBA - Founder & Proprietor</p>
                    </div>

                    <div className="lg:flex-1 space-y-8">
                        <div className="w-12 h-1 px-1 bg-accent mb-6" />
                        <h2 className="text-4xl font-bold text-primary">Visionary Leadership Behind Lakana</h2>
                        <p className="text-gray-600 text-xl italic leading-relaxed">
                            "Our mission is to build a bridge between the potential of Indian skill-seekers and the demands of the global market. We don't just export products; we export Indian quality and trust."
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            With a background in Management and Hospitality, J. Arivarasan Vijay established Lakana Enterprises with a core philosophy of 'Quality First'. By integrating skill development with an export division, he has created a circular model of growth that benefits both locall communities and international buyers.
                        </p>
                        <button className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors underline underline-offset-8">
                            Learn more about our Vision
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
