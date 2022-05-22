import React from 'react';
import './PrimaryBtn.css'
const PrimaryBtn = ({ children }) => {
    return (
        <div className='primary-btn btn btn-primary rounded-none flex items-center justify-center gap-4 border-none font-roboto min-w-[100px]'>
            {children}
        </div>
    );
};

export default PrimaryBtn;