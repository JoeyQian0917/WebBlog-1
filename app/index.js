import React from 'react';
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader';
import {  BrowserRouter , Route } from 'react-router-dom'
import App from './containers/App';

render(
	// <AppContainer>
	// 	<App/>
	// </AppContainer>,

    //使用路由来替代App组件
    <BrowserRouter >
        <Route path="/" component={App}/>
    </BrowserRouter>,
	document.getElementById('root')
);
if(module.hot){
	module.hot.accept('./containers/App',()=>{
		const NewRoot = require('./containers/App').default;
		render(
            <BrowserRouter >
                <Route path="/" component={NewRoot}/>
            </BrowserRouter>,
			document.getElementById('root')
		);
	});
}