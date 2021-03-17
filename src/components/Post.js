import React from 'react'
import {Card} from 'react-bootstrap'

const post = {
    "_id": "6051016970a2cf0015d21745",
    "Title": "Skyscraper",
    "Link": "https://www.instagram.com/p/CLjyb7mhVsN/",
    "Date": "2021-03-16",
    "published_at": "2021-03-16T19:08:03.341Z",
    "createdAt": "2021-03-16T19:05:13.702Z",
    "updatedAt": "2021-03-17T03:19:18.873Z",
    "__v": 0,
    "Image": {
        "_id": "6051015e70a2cf0015d21744",
        "name": "Capture.PNG",
        "alternativeText": "",
        "caption": "",
        "hash": "Capture_7b1c8ab10a",
        "ext": ".PNG",
        "mime": "image/png",
        "size": 145.99,
        "width": 341,
        "height": 596,
        "url": "https://res.cloudinary.com/diwkguu1h/image/upload/v1615921500/Capture_7b1c8ab10a.png",
        "provider_metadata": {
            "public_id": "Capture_7b1c8ab10a",
            "resource_type": "image"
        },
        "formats": {
            "thumbnail": {
                "name": "thumbnail_Capture.PNG",
                "hash": "thumbnail_Capture_7b1c8ab10a",
                "ext": ".PNG",
                "mime": "image/png",
                "width": 89,
                "height": 156,
                "size": 14.12,
                "path": null,
                "url": "https://res.cloudinary.com/diwkguu1h/image/upload/v1615921501/thumbnail_Capture_7b1c8ab10a.png",
                "provider_metadata": {
                    "public_id": "thumbnail_Capture_7b1c8ab10a",
                    "resource_type": "image"
                }
            },
            "small": {
                "name": "small_Capture.PNG",
                "hash": "small_Capture_7b1c8ab10a",
                "ext": ".PNG",
                "mime": "image/png",
                "width": 286,
                "height": 500,
                "size": 113.5,
                "path": null,
                "url": "https://res.cloudinary.com/diwkguu1h/image/upload/v1615921502/small_Capture_7b1c8ab10a.png",
                "provider_metadata": {
                    "public_id": "small_Capture_7b1c8ab10a",
                    "resource_type": "image"
                }
            }
        },
        "provider": "cloudinary",
        "related": [
            "6051016970a2cf0015d21745"
        ],
        "createdAt": "2021-03-16T19:05:02.877Z",
        "updatedAt": "2021-03-16T19:05:13.725Z",
        "__v": 0,
        "id": "6051015e70a2cf0015d21744"
    },
    "Description": "Skyscraper in brooklyn.",
    "id": "6051016970a2cf0015d21745"
}

export default ({title, url, date, link, description}) => {

    return (
        <div className="Post">
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
