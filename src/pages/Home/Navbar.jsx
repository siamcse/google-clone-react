import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-end gap-4 mt-5 mr-2'>
                <p>Gmail</p>
                <p>Images</p>
                <p><AppsIcon /></p>
                <p><PersonIcon /></p>
            </div>
        </div>
    );
};

export default Navbar;