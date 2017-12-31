/**
 * Created by liorbu on 30/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import Body from '../body.json';

/*
 {
 "1": [],
 "2": [{
 "firstName": "Paul",
 "lastName": "Taylor"
 }],
 "3": [{
 "firstName": "Thomas",
 "lastName": "Harris"
 }, {
 "firstName": "Sharon",
 "lastName": "Thomas"
 }]
 }
 */


function Step(props) {
    var paragraphs = Body[props.num].split('<p>');
    return (
        <div>
            {paragraphs.map(function (p, index) {
                return(
                    <p key={index}>{p}</p>
                )
            })}
        </div>
    )
}

function FriendsList(props) {
    var friendsInStep = props.list[props.num];
    return (
        <div>
            {friendsInStep.map(function (friend, index) {
                return(
                    <p key={index}>{friend.firstName + " " + friend.lastName + ", "}</p>
                )
            })}
        </div>
    )
}

class BabyStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStep: 1,
            friendsList: null
        };

        this.updateFriendsList = this.updateFriendsList.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            var newStep = nextProps.location.pathname === '/' ? 1 : nextProps.location.pathname.substring(5);
            this.setState( function () {
                return {
                    selectedStep : newStep
                }
            });
        }
    }

    componentDidMount() {
        this.updateFriendsList();
    }

    updateFriendsList() {
        axios.get('http://localhost:3001/friends')
            .then(res => this.setState({ friendsList: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        var title = require('../assets/headings/heading_bs' + this.state.selectedStep + '.png');
        return(
            <div className="baby-step-div">
                <img src={title} alt="baby-step-title"/>
                <Step num={this.state.selectedStep}/>
                {this.state.friendsList ? <FriendsList list={this.state.friendsList} num={this.state.selectedStep}/> : <p></p>}
            </div>
        )
    }

}

export default BabyStep;