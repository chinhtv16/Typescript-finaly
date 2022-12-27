import Register from '../pages/Register';
import Login from '../pages/Login';
import DashBoard from '../pages/DashBoard';
import Screen from '../pages/Screen';

type TypePublicRoutes = {
    path : string,
    component : any,
}[]

type TypePrivateRoutes = []


const publicRoutes: TypePublicRoutes = [
    { path: '/', component: Screen },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/dashboard', component: DashBoard },
];

const privateRoutes : TypePrivateRoutes = [];

export { publicRoutes, privateRoutes };