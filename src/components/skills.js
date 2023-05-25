import React from 'react';
import { ReactComponent as HTML5Logo } from '../images/svg/html-1.svg';
import { ReactComponent as CSS3Logo } from '../images/svg/css-3.svg';
import { ReactComponent as BootstrapLogo } from '../images/svg/bootstrap-5-1.svg';
import { ReactComponent as TailwindLogo } from '../images/svg/tailwind-css-2.svg';
import { ReactComponent as JavaScriptLogo } from '../images/svg/logo-javascript.svg';
import { ReactComponent as ReactLogo } from '../images/svg/react-2.svg';
import { ReactComponent as GatsbyLogo } from '../images/svg/gatsby.svg';
import { ReactComponent as GithubLogo } from '../images/svg/github-icon-1.svg';
import { ReactComponent as PyhtonLogo } from '../images/svg/python-5.svg';
import { ReactComponent as MySQLLogo } from '../images/svg/mysql-6.svg';
import { ReactComponent as PostGreSQLLogo } from '../images/svg/postgresql.svg';

export default function Skills() {
  return (
    <div className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl leading-8 text-gray-900">
          Minhas Habilidades Técnicas em Destaque
        </h2>
        <div className="mx-auto mt-10 grid pt-20 justify-items-center max-w-lg grid-cols-3 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-auto lg:max-w-6xl lg:grid-cols-5">

          <HTML5Logo className="h-28 w-auto"/>
          <CSS3Logo className="h-28 w-auto"/>
          <BootstrapLogo className="h-28 w-auto"/>
          <TailwindLogo className="h-28 w-auto"/>
          <JavaScriptLogo className="h-28 w-auto"/>
          <ReactLogo className="h-28 w-auto"/>
          <GatsbyLogo className="h-28 w-auto"/>
          <PyhtonLogo className="h-28 w-auto"/>
          <MySQLLogo className="h-28 w-auto"/>
          <PostGreSQLLogo className="h-28 w-auto"/>
          <GithubLogo className="h-28 w-auto lg:col-start-3"/>

        </div>
      </div>
    </div>
  )
}