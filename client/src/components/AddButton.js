import React from 'react';
import Card from 'react-bootstrap/Card';

import Dialog from './Modal';

const AddButton = ({ notes, change }) => {

    const [show, setShow] = React.useState(false);
    
    const handleShow = () => setShow(true);

    const add = () => {

        handleShow();
        
        change([
            ...notes, 
        ]);
        console.log("Added");
    }

    return (
        <div>
            <Card className="add" onClick={add}>
                +
            </Card>
            <Dialog show={show} setShow={setShow} notes={notes} setnotes={change} close={setShow}/>
        </div>
    )
}

export default AddButton
