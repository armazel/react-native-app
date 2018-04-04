import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    Button
} from 'react-native';
import {connect} from "react-redux";
import * as aboutUsActions from '../actions/aboutUsActions'
import { bindActionCreators } from 'redux';
import Swipeout from 'react-native-swipeout';



const mapStateToProps = (state) => {
    const userSailData = (state) => state.users.get('usersData');

    return {
        users: state.users.usersData,
        loaderActive: state.loaders.activeLoaderFlag || null,
        total: userSailData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        aboutUsActions: bindActionCreators(aboutUsActions, dispatch)
    }
};

const UsersList = ({ line,index }) => {
    return (
        line ?  <Text style={{flex:1, width:100, justifyContent:'center', flexWrap:'wrap'}}>
            {index + ') ' + line.name + ' ' + line.surname + ' ' + line.age + ' лет(года) ' + '(' + line.role + ')'}
            </Text> : null
    )
};


type Props = {};

class Second extends Component<Props> {
    static get defaultProps() {
        return {
            title: 'The Second Hello'
        };
    }

    constructor(props){
        super(props);
        this.onGetUsers = this.onGetUsers.bind(this);
        this.onActionSelected = this.onActionSelected.bind(this);
        this.state = {
            usersData: null
        }
    }

    onGetUsers() {
        this.props.aboutUsActions.getUsers();
    }

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            showSettings();
        }
    }

    render() {

        const navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );


        const {users} = this.props;
        return (
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
                <Button color="green" onPress={() =>
                    this.onGetUsers()}
                        title="Get all users"
                />

                <Text>
                    {
                        users ?
                            users.map((line, i) => {
                                return line ? <UsersList index={i+1} line={line} key={i}/>  : null;
                            }) : null
                    }
                </Text>

                {/*<Swipeout right={[{text: 'Button'}]}>
                    <View>
                        <Text>Swipe me left</Text>
                    </View>
                </Swipeout>*/}
            </View>
        )
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Second);
