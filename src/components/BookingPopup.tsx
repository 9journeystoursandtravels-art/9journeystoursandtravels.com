import { useEffect, useState } from "react";

interface BookingPopupProps {
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const sendWhatsAppMessage = (e: any) => {
    e.preventDefault();
    
    const phoneNumber = "8999128018"; // <--- CHANGE THIS

    const message = `New Booking Request:%0A%0AName: ${name}%0APhone: ${phone}%0ARequirement: ${details}`;
    const url = `https://wa.me/91${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4">Quick Booking</h2>

        <form onSubmit={sendWhatsAppMessage} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-md px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <textarea
            placeholder="Pickup & Drop Details"
            className="w-full border rounded-md px-3 py-2 h-24"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
          >
            Send on WhatsApp 🚕💬
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingPopup;
