import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

import { TypePathText, TextInput } from './index.js';

const replaceLater = "The quick brown fox jumps over the lazy dog's back";

export class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            text: replaceLater,
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.nativeEvent.text
        })
    }

    render() {
        return (
            <>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>It's Text Racer time!</Text>
                    <TypePathText />
                    <TextInput handleChange={this.handleChange} />
                </View>
            </>
    
        );
    }
  };
  
  export default Body;