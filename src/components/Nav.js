/**
 * Created by liorbu on 29/12/2017.
 */
import React, {Component} from 'react';
import { NavLink }  from 'react-router-dom';

class Nav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedStep: 1
        };
        this.updateStep = this.updateStep.bind(this);
    }

    componentDidMount() {
        this.updateStep(this.state.selectedStep);
    }

    updateStep(step) {
        this.setState(
            {
                selectedStep: step
            }
        );
    }

    render() {
        var steps = [1, 2, 3, 4, 5, 6, 7];
        return (
            <ul className="nav">
                {steps.map(function (i) {
                    var icon = require('../assets/icons/icons_small_bs' + i + '.png');
                    if (this.state.selectedStep === i){
                        icon = require('../assets/icons/icons_small_bs' + i + '_blue.png');
                    }
                    return (
                        <li key={i} onClick={this.updateStep.bind(this, i)}>
                            <NavLink exact activeClassName='active' to={'/step' + i}>
                                Baby Step {i}
                                <img src={icon} alt="TBC"/>
                            </NavLink>
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
};

export default Nav;