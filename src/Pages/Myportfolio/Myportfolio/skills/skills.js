import React, { useEffect, useState } from 'react';
import Skill from '../../Skill/SKill';



const Skills = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("skilldata.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='skills font-oswald mt-16' >
            <h2 className='text-secondary text-2xl font-bold mb-2'>Highlights of My Skills</h2>
            <hr />
            <div >
                {
                    data.map(skill => <Skill
                        key={skill.id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;