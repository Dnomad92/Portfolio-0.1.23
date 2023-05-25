import React from 'react';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Skills from '../components/skills';
import About from '../components/about';

const IndexPage = (props) => {
  return (
    <div>
    	<Hero />
    	<Skills />
      <About />
    	<Projects />
    </div>
  )
}

export default IndexPage;
export const Head = () => <title>Portfolio | Daniel de Oliveira</title>