/**
 * Created by Mac on 2017/10/30.
 */
import React ,{Component} from 'react';
import '../../css/home/homebanner.less';

export default class HomeBanner extends Component {
    render() {
        return (
            <div className="home-banner">
                <div className="home-banner-me">
                    <div className="home-banner-photo">
                        <img src="../../../static/touxiang/WechatIMG1442.jpeg" alt="头像" />
                    </div>
                    {/*<video src="../../../static/WeChatSight253.mp4" controls="controls" ></video>*/}
                    <div className="home-banner-desc">
                        <h1>马海</h1>
                        <p>一个正在努力的程序猿.......</p>
                        <p>分享编码和摄影</p>

                        <div className="home-banner-link">
                            <div className="link">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/mayunyi">Github</a>
                            </div>
                            <div className="link">
                                <a target="_blank" rel="noopener noreferrer" href="http://axuebin.com/cv">在线简历</a>
                            </div>
                            <div className="link">
                                <a target="_blank" rel="noopener noreferrer" href="https://axuebin.tuchong.com">图虫</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}