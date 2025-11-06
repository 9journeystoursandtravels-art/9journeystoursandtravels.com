import React from "react";

const destinations = [
  "Pune to Mumbai Trip",
  "Pune to Goa Trip",
  "Pune to Shirdi Trip",
  "Pune to Mahabaleshwar Trip",
  "Pune to Lonavala Trip",
  "Pune to Where You Want (Custom Ride)",
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#fff7f3] to-[#ffffff]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          Most Popular Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {destinations.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-lg text-foreground hover:text-primary transition-colors border-b border-border pb-2 hover:translate-x-1 duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
