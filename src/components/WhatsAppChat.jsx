import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  return (
    <a
      href="https://wa.me/919629772243?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppChat;
