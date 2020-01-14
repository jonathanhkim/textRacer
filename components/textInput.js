import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

import { Input, Button } from 'react-native-elements';


const TextInput = (props) => {
  const { handleChange, errors } = props
    return (
        <>
            <Input 
            onChange={ handleChange } 
            errorMessage={props.errors}
            errorStyle={{color: 'red'}}
            placeholder='Just start typing whenever you are ready' />
            <Button onPress={props.reset} title="Restart"></Button>
        </>

    );
  };
  
  export default TextInput;