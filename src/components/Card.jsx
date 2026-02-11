'use client';
import { motion } from 'framer-motion';

const Card = ({ title, description, icon: Icon, image, className = "" }) => {
    return (
        <motion.div
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`bg-white p-8 rounded-2xl shadow-lg border border-silver/20 hover:shadow-xl transition-all duration-300 ${className}`}
        >
            {Icon && (
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <Icon size={28} />
                </div>
            )}
            {image && (
                <div className="w-full h-48 mb-6 overflow-hidden rounded-xl">
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
            )}
            <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default Card;
