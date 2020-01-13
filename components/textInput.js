import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

import { Input } from 'react-native-elements';


const TextInput = (props) => {
  const { handleChange } = props
    return (
        <>
            <Input onChange={ handleChange } placeholder='Just start typing whenever you are ready' />
        </>

    );
  };
  
  export default TextInput;