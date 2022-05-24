import React from 'react';
import { BsGoogle } from 'react-icons/bs'

const SocialLogin = () => {
    return (
        <div className='font-roboto text-slate-300'>
            <p className='text-center my-4'>Or Try With</p>
            <div className='opacity-100 flex items-center w-[320px] border-[1px] border-secondary justify-center gap-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-80'>
                <BsGoogle></BsGoogle>
                Google
            </div>
        </div>
    );
};

export default SocialLogin;