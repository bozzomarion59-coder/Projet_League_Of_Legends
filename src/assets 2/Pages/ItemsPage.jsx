import { useEffect, useState } from "react";
import ItemsService from "../../Services/ItemsService";
import ItemsCard from "../Components/ItemsCard";

const ItemsPage = () => {
    const [items, setItems] = useState([]);


    const fetchItems = async () => {
        try {
            const response = await ItemsService.getItems();
            const itemsData = Object.values(response.data.data);
            setItems(itemsData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchItems();
    },[])

    return <>
     <ItemsCard />
    </>;
}

export default ItemsPage;