
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
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