/**
 * Created by Mac on 2017/10/30.
 */
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import '../../css/home/homeheader.less';

export default class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header">
                <div className="home-header-title"><Link to="/">马海的个人主页</Link></div>
                <div className="home-header-subtitle"><p>MaYunYi Personal Growth Website</p></div>
                <div className="home-header-nav">
                    <div className="home-header-nav-item"><Link to="/">主页</Link></div>
                    <div className="home-header-nav-item"><Link to="/blog">博客</Link></div>
                    <div className="home-header-nav-item"><Link to="/demo">案列</Link></div>
                    <div className="home-header-nav-item"><Link to="/about">关于</Link></div>
                </div>
            </div>
        );
    }
}