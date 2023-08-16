import React from 'react';
import google from '../../assets/google.png';
import { Mic, Search } from '@mui/icons-material';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SearchBar = () => {
    return (
        <div className='mt-5 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center '>
                <img className='w-80' src={google} alt="" />
                <div className='-mt-10'>
                    <Input/>
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