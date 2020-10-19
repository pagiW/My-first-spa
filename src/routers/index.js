import Header from '../templates/header';
import Home from '../pages/home';
import Error404 from '../pages/error404';
import Character from '../pages/character';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
}

export default router;