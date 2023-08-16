import React from 'react';

const Footer = () => {
    return (
        <footer className='bottom-0 fixed left-0 right-0'>
            <hr />
            <p className='mx-7 my-3'>Bangladesh</p>
            <hr className='' />
            <div>
                <div className='md:flex block justify-between mx-7 my-3'>
                    <div className='flex gap-7 justify-center md:mb-0 mb-5'>
                        <p>About</p>
                        <p>Advertising</p>
                        <p>Business</p>
                        <p>How Search works</p>
                    </div>
                    <div className='flex gap-7 justify-center'>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;