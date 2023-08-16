import React from 'react';
import google from '../../assets/google.png';
import { Mic, Search } from '@mui/icons-material';
import Button from '../../components/Button';

const SearchBar = () => {
    return (
        <div className='mt-10 flex flex-col justify-center items-center'>
            <div className='w-80 '>
                <img className='' src={google} alt="" />
                <div className='border-2 p-3 rounded-3xl flex gap-2'>
                    <Search className='text-gray-600' />
                    <input className='w-[590px] outline-none' type="text" />
                    <Mic className='text-gray-800' />
                </div>
                <div className='flex gap-3 mx-auto items-center justify-center'>
                    <Button classProps='mt-4' text='Google Search' />
                    <Button classProps='mt-4' text="I'm Feeling Lucky" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;