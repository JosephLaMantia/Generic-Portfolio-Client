import React from 'react'
import {Card} from 'react-bootstrap'

export default ({title, url, date, link, description}) => {

    return (
        <div className="PostCard">
            <Card style={{ width: '22rem'}}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{date}</Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
