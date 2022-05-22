import React from 'react';

const Project = ({ project }) => {
    const { name, desc, img } = project;
    return (
        <div class="card w-[250px] mx-auto border-b-2 border-primary">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body text-center ">
                <h2 class="font-oswald text-2xl">
                    {name}
                </h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Project;