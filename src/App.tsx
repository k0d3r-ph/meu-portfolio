import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <header className="sticky-top">
        <Navbar></Navbar>
      </header>
      <main className="container-fluid p-0 pt-5">
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
