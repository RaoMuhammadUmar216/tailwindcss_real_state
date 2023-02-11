import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Profiles from "./components/Profiles";
import NewsUpdatesProject from "./components/NewsUpdatesProject";
import Footer from "./components/Footer";

import "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Brands />
      <Services />
      <Experience />
      <Profiles />
      <NewsUpdatesProject />
      <Footer />
    </div>
  );
}

export default App;
