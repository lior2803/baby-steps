/**
 * Created by liorbu on 30/12/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import Body from '../body.json';

function FriendsList(props) {
    var friendsInStep = props.list[props.num];
    var friendsInStepStr = "";
    var alsoInStr = "";
    if (friendsInStep.length === 1){
        friendsInStepStr += friendsInStep[0].firstName + " " + friendsInStep[0].lastName;
        alsoInStr += " is also in Baby Step " + props.num;
    } else if (friendsInStep.length === 2){
        friendsInStepStr += friendsInStep[0].firstName + " " + friendsInStep[0].lastName + " and ";
        friendsInStepStr += friendsInStep[1].firstName + " " + friendsInStep[1].lastName;
        alsoInStr += " are also in Baby Step " + props.num;
    } else if (friendsInStep.length > 2){
        friendsInStepStr += friendsInStep[0].firstName + " " + friendsInStep[0].lastName + ", ";
        friendsInStepStr += friendsInStep[1].firstName + " " + friendsInStep[1].lastName;
        alsoInStr += " and " + (friendsInStep.length - 2);
        alsoInStr += (friendsInStep.length-2 === 1) ? " other friend are also in Baby Step " + props.num : " other friends are also in Baby Step " + props.num;
    }
    return (
        <div>
            {friendsInStepStr &&
            <p>
                <span>{friendsInStepStr}</span>{alsoInStr}
            </p>
            }
        </div>
    )
}

function StepContent(props) {
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
                <StepContent num={this.state.selectedStep}/>
                {this.state.friendsList ? <FriendsList list={this.state.friendsList} num={this.state.selectedStep}/> : <p></p>}
            </div>
        )
    }

}

export default BabyStep;