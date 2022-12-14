import React from 'react';

import Card from 'react-bootstrap/Card';

const CardComp = ({ title, subtitle, body, link }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                <Card.Text>{body}</Card.Text>
                <Card.Link href="#">{link}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardComp
