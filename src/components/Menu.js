import React, {useState, useEffect} from 'react';

export default () => {

    //Avatar
    const [avatar, setAvatar] = useState([]);

    useEffect(() => {
        const getAvatar = async () => {
          const response = await fetch('https://kevinmendezportfolio.herokuapp.com/avatar');
          const data = await response.json();
          setAvatar(data);
        }
    
        getAvatar()
      }, [])

        //Hero Image
        const [hero, setHero] = useState([]);

        useEffect(() => {
            const getHero = async () => {
              const response = await fetch('https://kevinmendezportfolio.herokuapp.com/hero-image');
              const data = await response.json();
              setHero(data);
            }
        
            getHero()
          }, [])

          

    //About Me section
    const [aboutMe, setAboutMe] = useState([]);

    useEffect(() => {
        const getAboutMe = async () => {
          const response = await fetch('https://kevinmendezportfolio.herokuapp.com/about-me');
          const data = await response.json();
          setAboutMe(data);
        }
    
        getAboutMe()
      }, [])

    return (
        <div className='Menu' style= {{backgroundImage: `url(${hero.hero && hero.hero.url})`}}>
            <div className='profile'>
                <div className='menu-image'>
                    <img className='menu-img' src={avatar.image && avatar.image.url}>
                    </img>
                </div>
                <div className='menu-text'>
                    <div className='menu-title'>MNDZ</div>
                    <div className='about'>{aboutMe.about}</div>
                </div>
            </div>
        </div>
    )
}


{/* <div className='contact'>
                <div className='icon'>
                    <a href="https://www.instagram.com/mndeezy/">
                        <Instagram color='black' size={20} strokeWidth='2px'/>@mndeezy
                    </a>
                </div>
                <div className='icon'>
                    <a href="mailto: kvnmendez10@gmail.com">
                    <Mail color='black' size={20} strokeWidth='2px'/>
                        kvnmendez10@gmail.com
                    </a>
                </div>
                </div> */}