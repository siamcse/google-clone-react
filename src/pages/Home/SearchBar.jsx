import React from 'react';
import google from '../../assets/google.png';
import Input from '../../components/Input';

const SearchBar = () => {
    return (
        <div className='mt-5 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center '>
                <img className='w-80' src={google} alt="" />
                <div className='-mt-10'>
                    <Input/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;