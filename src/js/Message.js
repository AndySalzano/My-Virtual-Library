import React from 'react';
import '../css/Message.css';
import CloseIcon from '@material-ui/icons/Close';

/**
 * Component that allows to display a message right before the header. It can be clickable to be removed
 */
function Message(props) {

    const messageRef = React.useRef()
    const [showMessage, setShowMessage] = React.useState(true)

    const closeButton = () => {
        console.log("HEYEHE")
        setShowMessage(false)
    }

    return (
        <div ref={messageRef} 
            style={{display: showMessage ? 'flex' : 'none' }} 
            className="message">
            <p>{props.text}</p>
            <button className="message__btn">
                <CloseIcon onClick={closeButton}/>
            </button>
        </div>
    );
}

export default Message;