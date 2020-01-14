import React from 'react';
import {
    View,
    Text,
  } from 'react-native';
import {
    Button
} from 'react-native-elements';


const Results = (props) => {
    let minutes = props.time/60000;
    let wpm = Math.round(props.words/minutes);
    return (
        <>
          <Text>{wpm} WPM</Text> 

          <Button onPress={props.reset} title="Try again?"></Button>
        </>

    );
  };
  
  export default Results;