import Header from '../templates/header';
import Home from '../pages/home';
import Error404 from '../pages/error404';
import Character from '../pages/character';
import GetHash from '../utils/getHash';
import ResolveRoutes from '../utils/resolveRouter';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = GetHash();
    let route = await ResolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router;