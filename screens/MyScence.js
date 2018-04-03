import React, { Component } from 'react';
import {View, Text, Navigator, Button, Picker, ListView} from 'react-native';

export default class MyScene extends Component {
    static get defaultProps() {
        return {
            title: 'MyScene'
        };
    }

    constructor(props){
        super(props);

        this.state = {
            language: '',
            languageInfo: ([
                'C#', 'Js', 'Ruby', '.NET', 'JAVA', 'C++', 'Go', 'Python'
            ])
        };
    }

    render() {
        const {languageInfo,language} = this.state;
        return (
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
                <Button onPress={() =>
                    this.props.navigation.navigate('Second')}
                        title="Go to the myScence"
                />
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    {
                        languageInfo ?
                            languageInfo.map((val,i)=>{
                                return <Picker.Item label={val} key={i} value={val} />
                            }): <Text>ничего</Text>
                    }
                </Picker>
                <View>
                    {
                        language ?
                            <Text>Поздравляю вы выбрали язык {language}!</Text>
                            : <Text>Ничего не выбранно</Text>
                    }

                </View>
            </View>
        )
    }
}