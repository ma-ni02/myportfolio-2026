import Navigation from "@/components/Navigation";
import ScrollGallery from "@/components/ScrollGallery";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <ScrollGallery />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
