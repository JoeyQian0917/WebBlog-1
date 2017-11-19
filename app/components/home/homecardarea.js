/**
 * Created by Mac on 2017/10/30.
 */
import React ,{Component} from 'react';
// import axios from 'axios';
import HomeCard from './homeCard';

export default class HomeCardArea extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    componentDidMount() {
        
    }
    handleClick(e) {
        this.props.ok(e.target.value)
    }
    render() {
        return (
            <div className="home-card-area">
               <input type="text" ref="myTextInput" onChange={this.handleClick.bind(this)}/>
            </div>
        );
    }
}