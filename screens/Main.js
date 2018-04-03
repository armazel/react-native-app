/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Greeting} from './../components/Greeting'
import Second from './../screens/Second';
import MyScence from './../screens/MyScence';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Button,
    ScrollView,
    Navigator,
    ListView
} from 'react-native';


type Props = {};


export default class Main extends Component<Props> {

    constructor(props){
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            text: '',
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }


    render() {

        const pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        const {text,dataSource} = this.state;
        return (

            <View style={{flex: 1}}>

                <View style={{flex:1}}>
                    <Button color="#841584" style={styles.buttonStyle} onPress={() =>
                        this.props.navigation.navigate('Second')}
                            title="Go to the kuda to Second"
                    />
                    <Button color="green" style={styles.buttonStyle} onPress={() =>
                        this.props.navigation.navigate('FirstScreen')}
                            title="Go to the kuda to MyScence"
                    />
                </View>

                <View style={{flex: 1, height:'100%', backgroundColor: 'powderblue', justifyContent:'center', alignItems:'center'}}>
                    <Greeting name="Egor123"></Greeting>
                </View>
                <View style={{flex: 2, height:'50%', backgroundColor: 'skyblue',justifyContent:'center', alignItems:'center'}} >
                    <Greeting name="Anton"></Greeting>
                    <ListView
                        dataSource={dataSource}
                        renderRow={(rowData,index,key) => <Text style={styles.textStyle}>{parseInt(key)+1}) {rowData}</Text>}
                    />
                </View>
                <View style={{flex: 3, height:'50%', backgroundColor: 'steelblue',justifyContent:'center', alignItems:'center'}}>
                    <Greeting name="Artuom"></Greeting>
                    <TextInput
                        style={{width:200,height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 22}}>
                        {
                            this.state.text.length ?
                                text : '🍕'
                        }
                    </Text>
                </View>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textStyle:{
        color:'green',
        fontSize:14
    },
    buttonStyle:{
        width:'50%',
        backgroundColor:'green',
        opacity:.8,
        marginTop:100,
        color:'red'
    }
});
