import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';

const About = () => {
    return (
        <div>
            <div class="card flex w-96 md:w-11/12 mx-auto flex-col md:flex-row my-32 justify-center lg:px-40">
                <div className='bg-none bg-primary p-8 font-oswald  md:text-right rounded-md'>
                    <h2 className="lg:mt-12">Who we are</h2>
                    <h2 className="text-4xl font-bold font-oswald">Quality & Itegrity <br /> Service Agency</h2>
                </div>
                <div class="card-body lg:items-start  mt-8 md:mt-0 md:w-6/12 space-y-4">
                    <h2 class="text-4xl font-oswald font-bold border-b-2 border-secondary">Innovus</h2>
                    <p className='pr-0'>Founded in 1998 in Mirpur City, Dhaka, A&S ELECTRICAL SOLUTIONS set
                        its foot as an electrical supply and equipment trading and services company.
                        Over the years, the company has earned a reputation for excellence and
                        professionalism for continuously striving to meet - and even exceed - standards
                        which set the climate for a sustainable business relationship with its clients.</p>
                    <div class="card-actions">
                        <PrimaryBtn>Discover Us</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;