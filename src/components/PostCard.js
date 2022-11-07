import React from 'react';
import {Card} from 'react-bootstrap';
import { Instagram } from 'react-feather';

export default ({title, url, date, link, description}) => {

    return (
        <div className="PostCard">
            <Card style={{ width: '100%', borderWidth: '0px', maxWidth: '500px' }}>
            <a href={link}><Card.Img variant="top" src={url}/></a>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>{title}</Card.Title>
                <Card.Text style={{textAlign: 'center', paddingBottom: '3vh'}}>{description}</Card.Text>
                <Card.Text style={{fontSize: '1.4vh'}}><a href={link}><Instagram size={20}/></a> {date}</Card.Text>
            </Card.Body> 
            </Card>
        </div>
    )
}
