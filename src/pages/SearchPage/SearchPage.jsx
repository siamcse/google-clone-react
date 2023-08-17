import React from 'react';
import google from '../../assets/google.png';
import Input from '../../components/Input';
import { Apps, Person, Settings } from '@mui/icons-material';
import prothomalo from '../../assets/prothomalo.png';
import { useStateValue } from '../../StateProvider';

const SearchPage = () => {
    const [{ term }] = useStateValue();
    console.log(term);
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
                        <Input hidebutton />
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

            {/* search results */}
            <div className='ml-44 mt-3'>
                <p>About 6,010,000 results (0.29 seconds) </p>
                <div className='mt-6'>
                    <a className='flex items-center gap-2' href="https://www.prothomalo.com/">
                        <img src={prothomalo} alt="" />
                        <div className='flex flex-col'>
                            <small>prothomalo.com</small>
                            <small>https://www.prothomalo.com/</small>
                        </div>
                    </a>
                    <a href="https://www.prothomalo.com/">
                        <h1 className=''>
                            প্রথম আলো | বাংলা নিউজ পেপার
                        </h1>
                    </a>
                    <small>বাংলাদেশসহ বিশ্বের সর্বশেষ সংবাদ শিরোনাম, প্রতিবেদন, বিশ্লেষণ, খেলা, বিনোদন, চাকরি, ...</small>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;