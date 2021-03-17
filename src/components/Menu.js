import React from 'react';
import { Instagram, Mail } from 'react-feather';

export default () => {
    return (
        <div className='Menu'>
            <div className='profile'>
                <div className='menu-image'>
                    <img className='menu-img' src='https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/s150x150/106255519_269846507623479_4769160507401469908_n.jpg?tp=1&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_ohc=UykXa-Ho_aUAX_nCpyB&ccb=7-4&oh=993b3b4730e464cfbaa69d4c070856f9&oe=607D6557'>
                    </img>
                </div>
                <div className='menu-text'>
                    <div className='menu-title'>MNDZ</div>
                    <div className='about'>
                        Kevin Mendez • Brooklyn NYC <br/>
                        📸 • Lover of the arts and music • Creator of peace!</div>
                </div>
                <div className='contact'>
                <div className='icon'>
                    <Instagram color='black' size={48}/>
                </div>
                <div className='icon'>
                    <Mail color='black' size={48}/>
                </div>
                </div>
            </div>
            
        </div>
    )
}
