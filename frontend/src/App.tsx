import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Services from './pages/Services';

import { ContactForm } from './components/contact/ContactForm'; 


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
    </>
  );
};


const ContactPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-[#080808]">
      <ContactForm />
    </main>
  );
};

export default function App() {
  return (
    <Router>
      
      <Navbar /> 
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        
        <Route path="/servicos" element={<Services />} />

        
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      
      <Footer />
    </Router>
  );
}
