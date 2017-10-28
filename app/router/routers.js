/**
 * Created by Mac on 2017/10/27.
 */
import Home from '../components/Home';
import Header from '../components/header';
import About from '../components/About';
import Progress from '../components/progress';
import Repos from '../components/Repos';

export default (store) => (
    [{
        path: '/',
        component: Home,
    }, {
        path: '/Header',
        component: Header,
    }, {
        path: '/About',
        component: About,
    }, {
        path: '/Progress',
        component: Progress,
    }, {
        path: '/Repos',
        component: Repos,
    }]
);
