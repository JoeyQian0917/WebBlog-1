/**
 * Created by Mac on 2017/10/30.
 */


import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class HomeCard extends Component {
      constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const contentList = this.props.cardContent.map(item => <li key={item.id}><Link to={item.url}>{item.title}</Link></li>);
        return (
            <div className="home-card">
                <div className="home-card-name">
                    <Link to={this.props.cardUrl}>{this.props.cardName}</Link>
                </div>
                <div className="home-card-content">
                    <ul>
                        {contentList}
                    </ul>
                
                </div>

            </div>
        );
    }
}

HomeCard.defaultProps = {
    cardName: 'Card Name',
    cardUrl: 'Card Url',
    cardContent: [],
};

HomeCard.propTypes = {
    cardName: PropTypes.string,
    cardUrl: PropTypes.string,
    cardContent: PropTypes.array,
};