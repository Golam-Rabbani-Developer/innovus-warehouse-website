import React from 'react';

const Skill = ({ skill }) => {
    const { name, picture, number } = skill;
    return (
        <div data-aos="fade-up-right" className='flex justify-between items-center mt-3'>
            <div className='flex items-center  justify-center gap-3'>
                <img style={{ width: "40px", height: "40px" }} src={picture} alt="" />
                <h5 >{name} </h5>
            </div>
        </div>
    );
};

export default Skill;