import React from 'react';
import Card from 'react-bootstrap/Card';

import Dialog from './Modal';

const AddButton = ({ todos, change }) => {

    const [show, setShow] = React.useState(false);
    
    const handleShow = () => setShow(true);

    const add = () => {

        handleShow();
        
        // change([
        //     ...todos, 
        //     {
        //         title: "A",
        //         subtitle: "S",
        //         body: "description"
        //     }
        // ]);
        console.log("Added");
    }

    return (
        <div>
            <Card className="add" onClick={add}>
                +
            </Card>
            <Dialog show={show} setShow={setShow} todos={todos} setTodos={change} close={setShow}/>
        </div>
    )
}

export default AddButton
