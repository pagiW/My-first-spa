const API = 'https://rickandmortyapi.com/api/character/';

const GetData = async id => {
    const ApiUrl = id? `${API}${id}` : API;

    try {
        const response = await fetch(ApiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('fetch error: ' + error.message);
    }
}

export default GetData;