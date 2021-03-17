import React from 'react'

import { Instagram, Mail } from 'react-feather';

export default () => {
    return (
        <div className='contact'>
                <div className='icon'>
                    <a href="https://www.instagram.com/mndeezy/"><Instagram color='black' size={20} strokeWidth='2px'/></a>
                    <div><a href='https://www.instagram.com/mndeezy/'>@mndeezy</a></div>
                </div>
                <div className='icon'>
                    <a href="mailto: kvnmendez10@gmail.com"><Mail color='black' size={20} strokeWidth='2px'/></a>
                    <div><a href='mailto: kvnmendez10@gmail.com'>kvnmendez10@gmail.com</a></div>
                </div>
                </div>
    )
}
