import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ type, color }) => {
    return (
        <div className='mt-30'>
            <ReactLoading type={type} color={color} height={300} width={200} />
        </div>
    );
};

export default Loading;