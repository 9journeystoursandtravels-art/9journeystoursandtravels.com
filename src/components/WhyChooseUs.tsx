import React from "react";
import { FaCarSide, FaHandsHelping, FaUserShield, FaCheckCircle } from "react-icons/fa";

const benefits = [
  {
    icon: <FaCarSide className="text-primary text-4xl" />,
    title: "Easy Online Taxi Booking",
    description: "Book your cab online in seconds with fast confirmation on call or WhatsApp.",
  },
  {
    icon: <FaCheckCircle className="text-primary text-4xl" />,
    title: "Clean & Comfortable Cars",
    description: "Our cars are regularly maintained and sanitized for every trip.",
  },
  {
    icon: <FaHandsHelping className="text-primary text-4xl" />,
    title: "Trusted by Thousands",
    description: "We have served many happy clients across Pune & Maharashtra.",
  },
  {
    icon: <FaUserShield className="text-primary text-4xl" />,
    title: "Professional, Verified Drivers",
    description: "Experienced drivers who ensure safe and smooth travel.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Why Choose 9JOURNEYS?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {benefits.map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div>{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
