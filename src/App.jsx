import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessageFailed from "./components/MessageFailed.jsx";
import MessageSent from "./components/MessageSent.jsx";
import About from "./sections/About.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";
import Projects from "./sections/Projects.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Clients />
                <Experience />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/" element={<Hero />} />
          <Route path="/error" element={<MessageFailed />} />
          <Route path="/success" element={<MessageSent />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
