import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';





export class Greeting extends Component{

    constructor(props){
        super(props);
        this.state = {showText: true};


        setInterval(()=>{
            this.setState({showText: !this.state.showText})
        }, 1000);

    }


    render(){
        debugger;
        const display =  this.state.showText ? 'Hello ' + this.props.name + ' !' : '******';

        return(
            <Text style={styles.textStyle}>{display}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        color:'yellow',
        fontWeight:'bold',
        fontSize:23
    }
});
