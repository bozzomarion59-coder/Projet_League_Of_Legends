import axios from "axios"

function getChampions () {
    return axios.get('https://ddragon.leagueoflegends.com/cdn/15.21.1/data/fr_FR/champion.json')
}

function getChampionById(championId) {
    return axios.get(`https://ddragon.leagueoflegends.com/cdn/15.21.1/data/fr_FR/champion/${championId}.json`);
    
}

export default {
    getChampions,
    getChampionById
}