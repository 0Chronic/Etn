import About from "./components/About";
import Allinone from "./components/Allinone";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";



function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
  <Support></Support>
  <Allinone></Allinone>
  <Pricing></Pricing>
  <Footer></Footer>
    </div>
  );
}

export default App;
