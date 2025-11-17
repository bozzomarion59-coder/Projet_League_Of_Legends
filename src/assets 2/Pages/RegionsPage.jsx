import { useEffect, useState } from "react";
import RegionsService from "../../Services/RegionsService";
import RegionsCard from "../Components/RegionsCard";



const RegionsPage = () => {
    const [regions, setRegions] = useState([]);
    
    const fetchRegions = async () => {
        try {
            const response = await RegionsService.getRegions();
            const regionsData = Object.values(response.data);
            setRegions(regionsData);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchRegions();
    }, [])
    
    return <>
        <RegionsCard />
    </>;
}

export default RegionsPage;