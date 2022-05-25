import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ type, color }) => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <ReactLoading type={type} color={color} height={200} width={100} />
        </div>
    );
};

export default Loading;