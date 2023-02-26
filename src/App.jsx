import Banner from "./components/Banner";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About/index";
import MyServices from "./components/MyServices/index";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="bg-zinc-100 bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Navbar />
        <About />
        <MyServices />
        {/* FAZER DEPOIS UMA PAGINA DE CLIENTES <Work /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
