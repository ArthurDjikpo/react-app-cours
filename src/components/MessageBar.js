import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const MessageBar = props => {
    const [message, setMessage ]= useState('');
    
    const handleChange = (e) => { 
        setMessage(e.target.value);
    }
    const handleClick = () => {
        props.handleMessageSubmit(message);
        setMessage('')
        
    };
    return (
        <div id='MessageBar'>
            <Input 
            type="text" 
            name="message"
            value={message} 
            onChange={handleChange} />

            <Button 
            onClick={handleClick}>
                Envoyer
            </Button>
        </div>
    ) 
};

MessageBar.propTypes = {
    handleMessageSubmit: PropTypes.func.isRequired
} 

export default MessageBar;