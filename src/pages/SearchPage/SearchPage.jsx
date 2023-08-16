import React from 'react';
import google from '../../assets/google.png';
import Input from '../../components/Input';
import { Apps, Person, Settings } from '@mui/icons-material';

const SearchPage = () => {
    const searchTopicData = [
        {
            title: 'All'
        },
        {
            title: 'Images'
        },
        {
            title: 'Videos'
        },
        {
            title: 'News'
        },
        {
            title: 'Maps'
        },
        {
            title: 'More'
        },
    ]
    return (
        <div>
            <div className='m-5 flex justify-between'>
                <div className='flex items-start'>
                    <img className='w-28' src={google} alt="" />
                    <div className='ml-9 mt-5'>
                        <Input />
                        <div className='flex gap-2 mt-2'>
                            {
                                searchTopicData.map((title, i) => <p key={i} className='border-2 px-3 py-1 rounded-2xl hover:bg-gray-300'>{title.title}</p>)
                            }
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex gap-5'>
                    <p className='text-2xl'><Settings /></p>
                    <p className='text-2xl'><Apps /></p>
                    <p className='text-2xl'><Person /></p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default SearchPage;