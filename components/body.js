import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

import { TypePathText, TextInput, Results } from './index.js';

const replaceLater = "Sample text";

export class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            started: false,
            startTime: 0,
            time: 0,
            finished: false,
            text: replaceLater,
            textLength: replaceLater.split(" ").length,
            input: "",
            errors: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3001/getText', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            this.setState({
                text: data.text
            })
        })
    }

    checkIfFinished(text) {
        return this.state.text === text;
    }

    currentCorrect(text) {
        return this.state.text.includes(text);
    }
    reset() {
        this.setState({
            started: false,
            finished: false,
            input: "",
            time: 0,
            startTime: 0,
            errors: ""
        })
    }

    handleChange(e) {
        if (!this.state.started) {
            this.setState({
                started: true,
                startTime: Date.now()
            })
        }

        let currentText = e.nativeEvent.text;
        if (!this.currentCorrect(currentText)) {
            this.setState({
                errors: "nice try guy"
            })
        } else {
            this.setState({
                errors: ""
            })
        }
        if (this.checkIfFinished(currentText)) {
            this.setState({
                finished: true,
                time: (Date.now() - this.state.startTime)
            }, () => {
                fetch('http://localhost:3001/finishGame', {
                    method: "GET",
                    headers: {
                        "Content-Type": 'application/json'
                    }
                }).then((res) => { 
                    return res.json();
                }).then((data) => {

                })
            })
        }

        this.setState({
            input: currentText
        })

    }
    gameView() {
        return (
            <>
                <Text>It's Text Racer time!</Text>
                <TypePathText text={this.state.text} />
                <TextInput reset={this.reset} handleChange={this.handleChange} errors={this.state.errors} />
            </>
        )
    }

    resultsPage() {
        return (
            <>
                <Results time={this.state.time} words={this.state.textLength} reset={this.reset}/>
            </>
        )
    }
    renderView() {
        if (this.state.finished) {
            return this.resultsPage();
        } else {
            return this.gameView();
        }
    }

    render() {
        return (
            <>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {this.renderView()}
                </View>
            </>
    
        );
    }
  };
  
  export default Body;