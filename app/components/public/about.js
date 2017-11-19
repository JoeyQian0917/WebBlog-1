/**
 * Created by Mac on 2017/10/30.
 */

import React ,{ Component }from 'react';
import '../../css/about/about.less';
export default class About extends Component {
    componentDidMount() {
        this.node.scrollIntoView();
    }
    render() {
        return (
            <div className="main" ref={node => this.node = node} >
                <div className="main-container about-container">
                    <div className="about-detial about-desc">
                        <h1>关于我</h1>
                        <ul>
                            <li>真正的才智是刚毅的志向。 —— 拿破仑</li>
                            <li>人的理想志向往往和他的能力成正比。 —— 约翰逊</li>
                            <li>志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长。 —— 莎士比亚</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="about-detial about-contact">
                        <h1>联系我</h1>
                        <ul>
                            <li>个人主页：<a  rel="noopener noreferrer" href="">暂时没有</a></li>
                            <li>Github：<a target="_blank" rel="noopener noreferrer" href="https://github.com/mayunyi">https://github.com/mayunyi</a></li>
                            <li>Email： kuel980@outlook.com</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="about-detial about-friend">
                        <h1>友情链接</h1>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://phodal.com">Phodal</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="http://sundway.me">Sundway</a></li>
                        </ul>
                    </div>
                    <hr />
                    {/*<div className="about-detial about-简历">*/}
                        {/*<h1>我的简历</h1>*/}
                        {/*<ul>*/}
                            {/*<li><a target="_blank" rel="noopener noreferrer" href="http://axuebin.com/cv/xuebin-Resume.pdf">前端开发工程师</a></li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}