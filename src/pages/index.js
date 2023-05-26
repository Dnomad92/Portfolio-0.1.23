import React from 'react';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Skills from '../components/skills';
import About from '../components/about';
import Footer from '../components/footer';

const IndexPage = (props) => {
  return (
    <div>
    	<Hero />
    	<Skills />
    	<Projects />
      <About />
      <Footer />
    </div>
  )
}

export default IndexPage;
export const Head = () => <title>Portfolio | Daniel de Oliveira</title>