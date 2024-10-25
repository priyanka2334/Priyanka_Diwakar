import React from 'react';
import { Element } from 'react-scroll';
// // import About from './componet/About';
// import About from './component/About.jsx';
// import Skills from './componet/Skills.jsx';
// import List from './componet/Projects.jsx';
// import Contact from './componet/Contact.jsx';
// import Home from './componet/Home.jsx';
// import Navbar from './componet/Nev.jsx';

import About from './component/About.jsx';
import Skills from './component/Skills.jsx';
import List from './component/Projects.jsx';
import Contact from './component/Contact.jsx';
import Home from './component/Home.jsx';
import Navbar from './component/Nev.jsx';





function App() {
  return (
    <>
     <Navbar/>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='skills'>
        <Skills />
      </Element>
      <Element name='project'>
        <List />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>

    </>
  );
}

export default App;