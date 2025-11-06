import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CarFleet from "@/components/CarFleet";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import PopularDestinations from "@/components/PopularDestinations";
import WhyChooseUs from "@/components/WhyChooseUs";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <CarFleet />
      <PopularDestinations />
      <WhyChooseUs />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
