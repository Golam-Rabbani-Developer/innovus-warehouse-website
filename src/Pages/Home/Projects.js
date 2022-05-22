import React from 'react';
import Project from './Project';

const projects = [
    { id: 1, name: "Building Construction", desc: "Multistoried Building", img: 'https://i.ibb.co/2kCqhkC/02-projects-1.png' },
    { id: 2, name: "Wire Maintain", desc: "Multistoried Building Maintain", img: 'https://i.ibb.co/RzswFkY/06-projects-1.png' },
    { id: 3, name: "Building Maintenance", desc: "Multistoried Building", img: 'https://i.ibb.co/nng4jmM/05-projects-1.png' },
]



const Projects = () => {
    return (
        <div className='gap-4 grid grid-cols-1 lg:grid-cols-4 my-40 lg:px-44 px-10 font-roboto bg-secondary text-white py-20'>
            <div className='space-y-10 text-center lg:text-left mb-8 lg:mb-0'>
                <h2 className='font-bold text-4xl font-oswald  mb-8 lg:mb-0'>Our Latest Projects Of This Year</h2>
                <p className='lg:border-b-2 border-primary'>Personal Account : 1265</p>
                <p className='lg:border-b-2 border-primary'>Trade : Production & sale</p>
                <p className='lg:border-b-2 border-primary'>Customer Service : Satisfied All</p>
                <p className='lg:border-b-2 border-primary'>Best Producer : 13-17</p>
            </div>


            {projects.map(project => <Project
                key={project.id}
                project={project}
            ></Project>)}


        </div>
    );
};

export default Projects;