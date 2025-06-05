import { Banner } from "./components/banner/Banner";
import { Cases } from "./components/cases/Cases";
import { Consultation } from "./components/consultation/Consultation";
import { Cooperation } from "./components/cooperation/Cooperation";
import { Faq } from "./components/FAQ/Faq";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Service } from "./components/services/Service";

export default function Home() {
  return (
    <div className="home-container px-2">
      <div className="home-background"></div>
      <Header />
      <Banner />
      <Service />
      <Cases />
      <Consultation />
      <Faq/>
      <Cooperation />
      <Footer />
    </div>
  );
}
