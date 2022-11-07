import React from 'react';
import { Linkedin } from 'react-feather';


export default () => {
    return (
        <div className='footer'>
            <a className='footer-link' href='https://www.linkedin.com/in/lamantiajoseph/'>Created by: Joseph LaMantia Jr</a>
            <a className='footer-link' href=''><div className='icon'>
                <Linkedin size={20} strokeWidth='1.5'/>
            </div></a> 
        </div>
    )
}
