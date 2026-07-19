import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import Stats from "../../components/home/Stats";
import Testimonials from "../../components/home/Testimonials";
import CTA from "../../components/home/CTA";
function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <Stats/>
       <Testimonials />
       <CTA />
    </>
  );
}

export default Home;