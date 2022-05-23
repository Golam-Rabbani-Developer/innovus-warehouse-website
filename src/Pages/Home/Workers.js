import React from 'react';
import Work from './Work';

const workers = [
    { id: 1, name: "Ankit Tiawari", designation: "Senior Engineer", desc: "Senior Engineer, uses math and science to solve different technical problems. Their main duties include developing new products for companies or individuals to use, providing maintenance to current products to", img: "https://i.ibb.co/m6KdZfs/02-team-1.png" },
    { id: 1, name: "Benzam Alia", designation: "Founder & CEO", desc: " Design equipment and devices, such as artificial internal organs, replacements for body parts, and machines for diagnosing medical problems. Install, maintain, or provide technical support for biomedical equipment.", img: "https://i.ibb.co/dmMFLzh/03-team-1.png" },
    { id: 1, name: "George Sham", designation: "Account Manger", desc: " usually necessary to work in this sector, though a few engineers have qualifications in disciplines such as maths, physics or computer science.", img: "https://i.ibb.co/Bw1tdm6/01-team-1.png" },
]

const Workers = () => {
    return (
        <div className='mt-64 px-10 lg:px-40'>
            <div className='flex flex-col md:flex-row items-center justify-between font-roboto gap-5 lg:gap-12'>
                <div className='lg:w-6/12'>
                    <p className='font-roboto text-sm text-orange-500 '>Expert Workers</p>
                    <h2 className='mt-4 font-oswald text-3xl font-bold text-slate-900'>Qualified Engineers Of Innovus</h2>
                </div>
                <p className='text-slate-600 mt-4 lg:mt-0 lg:w-6/12'>Innovus Are A Industry & Manufacturing Services Provider Institutions. Suitable For Factory, Manufacturing, Industry, Engineering, Construction And Any Related Industry Care Field.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    workers.map(worker => <Work
                        key={worker.id}
                        work={worker}
                    ></Work>)
                }
            </div>
        </div>
    );
};

export default Workers;