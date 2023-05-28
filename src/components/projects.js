import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image'; 
import singlePage from '../images/projects/singlePage.png';
import portfolioPage from '../images/projects/portfolioPage.png';
import instPage from '../images/projects/instPage.png';
import landingPage from '../images/projects/landingPage.png'

const projects = [
  {
    name: 'Site Institucional de uma Página',
    title:'Apresente sua empresa de forma concisa e eficaz com um site institucional de uma página',
    description: 'Site de uma única página que concentra todas as informações importantes sobre a sua empresa, como missão, serviços, equipe e informações de contato.',
    image: singlePage,
    link: 'https://tocalandingpage.gatsbyjs.io/',
    tags: ['Front-End', 'UI/UX', 'Concept design', 'Fast Deploy', 'Gatsby Cloud'],
    bgColor:'bg-yellow-300'
  },
  {
    name: 'Portfólio',
    title: 'Mostre suas habilidades e projetos com um site de portfólio impressionante',
    description: 'Crie um site personalizado para exibir seus trabalhos, projetos e habilidades, permitindo que potenciais clientes ou empregadores conheçam seu trabalho.',
    image: portfolioPage,
    link: 'https://portfolio0123.gatsbyjs.io/',
    tags: ['Front-End', 'Data Visualization', 'Data Analysis', 'Real-time Updates'],
    bgColor:'bg-blue-200'
  },
  
  // Adicione mais projetos conforme necessário
  {
    name: 'Site Institucional',
    title: 'A presença online da sua empresa com um site institucional profissional',
    description: 'Desenvolva um site que apresente informações detalhadas sobre a sua empresa, sua missão, serviços oferecidos e dados de contato.',
    image: instPage,
    link: 'https://dnomad92.github.io/Agency-Model-1',
    tags: ['Front-End', 'Back-End', 'UI/UX', 'Payment Integration', 'Database Management'],
    bgColor:'bg-red-200'
  },
  {
    name: 'Landing Page',
    title: 'Venda mais captando a atenção dos visitantes com uma página de destino',
    description: 'Um site de uma única página que mostra detalhes, com o objetivo de promover um produto, capturar leads ou direcionar os visitantes para uma oferta específica.',
    image: landingPage,
    link: 'https://tocalandingpagev2.gatsbyjs.io/',
    tags: ['Mobile Development', 'UI/UX', 'Push Notifications', 'Offline Capabilities'],
    bgColor:'bg-green-200'
  },
];

export default function Projects() {
  return (
    <div id="projects" className="bg-neutral-50 overflow-visible">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:py-12 lg:px-0">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Meus Projetos</h2>
          <p className="mt-4 text-gray-500">
            Aqui estão alguns dos meus projetos mais recentes. Cada projeto apresenta uma breve descrição.
          </p>
          <div className="mt-16 grid grid-cols-1 sm:gap-y-16 lg:gap-x-8">
            {projects.map((project) => (
              <article key={project.name} className={` grid border-t gap-x-6 gap-y-10 md:grid-cols-3 py-4  lg:max-h-max lg:rounded-3xl lg:pb-10 lg:px-8 ${project.bgColor}`}>
                <div className=" px-5 lg:gap-y-8 lg:min-h-full">
                  <h2 className="text-4xl font-bold tracking-tight mt-10 text-gray-900 sm:text-4xl">{project.title}</h2>
                  <p className="my-6 text-lg text-gray-500">{project.description}</p>
                  <span clasName="">
                    <a className="underline font-semibold text-lg mx-1" href={project.link} target="_blank" rel="noopener noreferrer">
                      Visite o Site 
                    </a>
                    <span aria-hidden="true">&rarr;</span>
                  </span>  
                  <div className="flex flex-wrap my-8">
                    {project.tags.map((tag) =>(
                      <p className="m-1 text-sm leading-6">
                        <span className="ring ring-1 ring-blue-500 ring-offset-0 rounded-2xl p-1">
                           • {tag + " "}   
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="relative p-10 rounded-3xl col-span-2 lg:max-w-full ">
                  {/*<StaticImage 
                    className=""
                    loading="lazy"
                    src={`${project.image}`}
                    alt=""
                    height={900}

                  />*/}
                    
                  <div className="absolute lg:max-w-5xl  lg:-right-44 ">
                    <img
                    key={project.title}
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg object-fit lg:max-w-full object-left-top bg-gray-100"
                    height = {550}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
