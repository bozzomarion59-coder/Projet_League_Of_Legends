import axios from "axios";

function getItems () {
    return axios.get('https://ddragon.leagueoflegends.com/cdn/15.21.1/data/fr_FR/item.json')
}

function getItemByName(name) {
    return axios.get(`https://ddragon.leagueoflegends.com/cdn/15.21.1/data/fr_FR/champion/${name}.json`);
    
}

export default {
    getItems,
    getItemByName
}
