import GetData from '../utils/getData';

const Home = async () => {
    const charactersData = await GetData();
    const view = `
        ${charactersData.results.map(character => `<div class="Characters">
        <article class="Characters-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}" />
                <h2>${character.name}</h2>
            </a>
        </article>
    </div>
    `).join('')}
    `;
    return view;
}

export default Home;