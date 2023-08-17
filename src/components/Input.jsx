import { Mic, Search } from '@mui/icons-material';
import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';

const Input = ({ hidebutton }) => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const [{ }, dispatch] = useStateValue();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionType.SET_SEARCH_TERM,
            term: input
        })
        navigate('/search');
        
    }
    return (
        <form action="">
            <div className='border-2 p-3 rounded-3xl flex gap-2'>
                <Search className='text-gray-600' />
                <input value={input} onChange={(e) => setInput(e.target.value)} className='sm:w-[465px] outline-none mx-2' type="text" />
                <Mic className='text-gray-800' />
            </div>
            {
                !hidebutton ? (<div className='flex gap-3 mx-auto items-center justify-center'>
                    <Button handleSearch={search} classProps='mt-4' text='Google Search' />
                    <Button classProps='mt-4' text="I'm Feeling Lucky" />
                </div>) :
                (
                        <Button handleSearch={search} classProps='hidden' text='Google Search' />
                )
            }
        </form>
    );
};

export default Input;