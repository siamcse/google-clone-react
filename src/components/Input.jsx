import { Mic, Search } from '@mui/icons-material';
import React from 'react';

const Input = () => {
    return (
        <div className='border-2 p-3 rounded-3xl flex gap-2'>
            <Search className='text-gray-600' />
            <input className='sm:w-[465px] outline-none mx-2' type="text" />
            <Mic className='text-gray-800' />
        </div>
    );
};

export default Input;