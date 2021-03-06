import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import BlogIndex from '../blog/blogindex';
import Article from '../article/article';
import Archive from '../archive/archive';
// import Tag from '../tag/tag';
// import Category from '../category/category';

export default class Blog extends React.Component {
    componentDidMount() {
        this.node.scrollIntoView();
    }

    render() {
        return (
            <div ref={node => this.node = node} >
                <Route exact path={`${this.props.match.url}/`} component={BlogIndex} />
                <Route path={`${this.props.match.url}/archive`} component={Archive} />
                {/*<Route path={`${this.props.match.url}/category/:category`} component={Category} />*/}
                {/*<Route path={`${this.props.match.url}/tag/:tag`} component={Tag} />*/}
                <Route path={`${this.props.match.url}/article/:number`} component={Article} />
            </div>
        );
    }
}

Blog.defaultProps = {
    match: null,
    url: 'url',
};

Blog.propTypes = {
    match: PropTypes.object,
    url: PropTypes.string,
};