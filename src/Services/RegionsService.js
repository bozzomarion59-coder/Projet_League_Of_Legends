import axios from "axios";

function getRegions () {
        return axios.get(`/data/regions.json`);
    };



function getRegionById() {
        return axios.get('/data/regions.json');
};


export default {
    getRegions,
    getRegionById
}