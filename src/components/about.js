import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function About () {
	return(
		<div className="relative items-center pb-0 bg-neutral-50">
			<div className="items-strech static  pt-10 lg:gap-y-8">
				<div className=" absolute flex rounded-2xl  max-h-56 -my-20 md:p-0 z-10 inset-x-8 max-w-96 max-w-fit lg:-my-8  bg-slate-500  ">
					<div className="relative shadow-2xl shadow-zinc-800 flex rounded-2xl lg:h-full aspect-2/1 lg:aspect-auto mx-0">
					  <StaticImage 
					  	className=" h-30  lg:h-full w-auto rounded-2xl"
					  	loading="lazy" 
					  	src="../images/fotoAbout.jpeg" 
					  	alt=""			
					  	height = {560}
					  	// width = {400}		  	
					 	/>
					</div>
				</div>
			
			  <div class=" grid row-reverse text-base px-5 pt-40 pb-10 md:p-1 lg:py-10 lg:px-20 lg:max-w-none lg:basis-1/2 space-y-4 dark:bg-slate-800 dark:text-white self-right ">
			    <blockquote className="leading-9 text-center md:text-left place-self-end font-semibold lg:max-w-3xl">
			      <p className="md:indent-8">
							Eu sou Daniel, um desenvolvedor web apaixonado. Crio experiências incríveis e deslumbrantes na web usando o GatsbyJS. Com minha experiência e conhecimento, ofereço um serviço completo de configuração para que você possa começar seu projeto com tranquilidade e agilidade.
						</p>
						<p >
							Com o Gatsby, utilizo a combinação de React, GraphQL e otimização de desempenho para entregar sites extremamente rápidos, independentemente do tamanho ou complexidade. Seja uma landing page elegante, um site institucional de destaque ou uma loja online sofisticada, estou preparado para tornar sua visão uma realidade.
						</p>
						<p >
							Além disso, meu compromisso com a qualidade e a atenção aos detalhes garantem que cada projeto seja cuidadosamente desenvolvido, com uma arquitetura escalável e um código limpo e organizado.
							{/*<br/>
							Entre em contato comigo agora mesmo para dar o primeiro passo na criação do seu portfólio impressionante com Gatsby.
							<br/>
							Estou ansioso para trabalhar com você e transformar sua visão em uma realidade digital!
							<br/>*/}
			      </p>
			    </blockquote>
			    <figcaption class="font-medium text-right">
			      <div class="text-sky-500 mt-4 dark:text-sky-400">
			        Daniel Oliveira
			      </div>
			      <div class="text-slate-700 dark:text-slate-500">
			        Web Developer, Pernambuco
			      </div>
			    </figcaption>
			  </div>
			</div>			
		</div> 
	);
}