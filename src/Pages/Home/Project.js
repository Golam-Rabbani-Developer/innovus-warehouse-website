import React from 'react';

const Project = ({ project }) => {
    const { name, desc, img } = project;
    return (
        <div className="card w-[250px] mx-auto border-b-2 border-primary">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-center ">
                <h2 className="font-oswald text-2xl">
                    {name}
                </h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Project;