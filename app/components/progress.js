/**
 * Created by Mac on 2017/10/26.
 */
import React, { Component } from 'react';

export default class Progress extends Component {
    render(){
        return (
            <div className="components-progress row">
                {this.props.progress}s
                <div>
                    {
                        this.props.data.map((p)=>{
                            return(
                                <div key={p.key}>
                                    <h3 >{p.title}</h3>
                                    <p>{p.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
