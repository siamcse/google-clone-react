import React from 'react';

const Footer = () => {
    return (
        <div className='mt-36'>
            <hr />
            <p className='mx-7 my-3'>Bangladesh</p>
            <hr className=''/>
            <div className='sm:flex block justify-between mx-7 my-3'>
                <div className='flex gap-7 justify-center'>
                    <p>About</p>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Works</p>
                </div>
                <div className='flex gap-7 justify-center'>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;