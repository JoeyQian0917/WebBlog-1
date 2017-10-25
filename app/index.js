
import Hello from './components/Hello';
import React from 'react';
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader';

render(
	<AppContainer>
		<Hello/>
	</AppContainer>,
	document.getElementById('root')
);
if(module.hot){
	module.hot.accept('./components/Hello',()=>{
		const NewHello = require('./components/Hello').default;
		render(
			<AppContainer>
				<Hello/>
			</AppContainer>,
			document.getElementById('root')
		);
	});
}

console.log(React.version)