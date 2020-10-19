import GetData from '../utils/getData';
import GetHash from '../utils/getHash';

const Character = async () => {
    const id = GetHash();
    const CharacterApi = await GetData(id);
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${CharacterApi.image}" alt="${CharacterApi.name}">
                <h2>${CharacterApi.name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Episodes: ${CharacterApi.episode.length}</h3>
                <h3>Status: ${CharacterApi.status}</h3>
                <h3>Specie: ${CharacterApi.species}</h3>
                <h3>Gender: ${CharacterApi.gender}</h3>
                <h3>Origin: ${CharacterApi.origin.name}</h3>
                <h3>Last Location: ${CharacterApi.location.name}</h3>
            </article>
        </div>
    `;

    return view;
}

export default Character;