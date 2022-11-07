import React, {useState, useEffect} from 'react';

export default () => {

    //Avatar
    const [avatar, setAvatar] = useState([]);

    useEffect(() => {
        const getAvatar = async () => {
          const response = await fetch('http://localhost:1337/avatar');
          const data = await response.json();
          setAvatar(data);
        }
    
        getAvatar()
      }, [])

        //Hero Image
        const [hero, setHero] = useState([]);

        useEffect(() => {
            const getHero = async () => {
              const response = await fetch('http://localhost:1337/hero-image');
              const data = await response.json();
              setHero(data);
            }
        
            getHero()
          }, [])

          

    //About Me section
    const [aboutMe, setAboutMe] = useState([]);

    useEffect(() => {
        const getAboutMe = async () => {
          const response = await fetch('http://localhost:1337/about-me');
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
                    <div className='menu-title'>JLSolutions</div>
                    <div className='about'>{aboutMe.about}</div>
                </div>
            </div>
        </div>
    )
}