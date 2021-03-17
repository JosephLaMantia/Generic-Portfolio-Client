import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import PostCard from './PostCard'

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
          const response = await fetch('https://kevinmendezportfolio.herokuapp.com/posts');
          const data = await response.json();
          setPosts(data);
        }
    
        getPosts()
      }, [])

    return (
        <div className="Posts">
      {posts.map(post => (

          
        <PostCard
          title = {post.Title}
          url={post.Image && post.Image.url}
          date={post.Date}
          link={post.Link}
          description = {post.Description}  
        />


       ))}
    </div>
    )
}
