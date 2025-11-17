import { useEffect, useState } from "react"
import ChampionsService from "../../Services/ChampionsService";
import { Container} from "react-bootstrap";



const HomePage = () => {
    const [champions, setChampions] = useState([]);


    const fetchChampions = async () => {
        try {
            const response = await ChampionsService.getChampions();
            setChampions(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchChampions();
    }, [])



    return <>
        <Container fluid className="d-flex flex-column align-items-center pt-3 pb-6 gap-3">
            <img className="home-image" src="https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg" alt="ImageLoL" />
        </Container>
        
    </>;
}

export default HomePage;