import React from 'react'

import { Instagram, Mail } from 'react-feather';

export default () => {
    return (
        <div className='contact'>
                <div className='icon'>
                    <a href="https://www.instagram.com/"><Instagram color='black' size={20} strokeWidth='2px'/></a>
                    <div><a href='https://www.instagram.com/'>@instagram</a></div>
                </div>
                <div className='icon'>
                    <a href="mailto: test@gmail.com"><Mail color='black' size={20} strokeWidth='2px'/></a>
                    <div><a href='mailto: test@gmail.com'>test@gmail.com</a></div>
                </div> 
                </div>
    )
}
