import React, { useState } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
        <Header />
      
      <main>
      {/* {!contactSelected ? (
        <>
          <
      )} */}
        <About />

        <Portfolio />

        <Resume />

        <ContactForm />

      </main>

        <Footer />
    </div>
  );
}

export default App;
