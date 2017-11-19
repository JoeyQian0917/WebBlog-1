/**
 * Created by Mac on 2017/10/30.
 */


import React ,{Component} from 'react';
import HomeBanner from '../home/homebanner';
import HomeCardArea from '../home/homecardarea';

export default class Home extends Component {

 	constructor() {
        super();
        this.state = {
            a:""
        };
    }
	ok(e){
		this.setState({
			a:e
		})
	}
    render() {
    	this.refs;
        return (
            <div>
                <HomeBanner />
                <HomeCardArea ok ={this.ok.bind(this)}/>
                <h3>{this.state.a}</h3>
            </div>

        );
    }
}