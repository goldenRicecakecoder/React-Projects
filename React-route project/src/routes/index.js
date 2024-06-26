import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Portfolio from "../components/portfolio/Portfolio";

const routes = [
    {
        path: '/portfolio',
        component: Portfolio,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path: '/contact',
        component: Contact,
        exact: true
    },
    {
        path: '/',
        component: Home,
    },
]

export default routes;