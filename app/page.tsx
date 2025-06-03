import { Banner } from "./components/banner/Banner";
import { Cases } from "./components/cases/Cases";
import Header from "./components/Header";
import { Service } from "./components/services/Service";

export default function Home() {
  return (
    <div className="home-container mx-2">
      <div className="home-background"></div>
      <Header /> 
      <Banner />
      <Service />
      <Cases/>
    </div>
  );
}
