import { useEffect, useState } from "react";
import ChampionsService from "../../Services/ChampionsService";
import ChampionsCard from "../Components/ChampionsCard";


const ChampionsPage = () => {
    const [champions, setChampions] = useState([]);


    const fetchChampions= async () => {
        try {
            const response = await ChampionsService.getChampions();
            setChampions(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchChampions();
    }, [])

    return <>
    <ChampionsCard />
    </>;
}

export default ChampionsPage;