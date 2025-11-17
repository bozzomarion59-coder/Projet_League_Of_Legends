import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ItemsCard() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://ddragon.leagueoflegends.com/cdn/15.21.1/data/en_US/item.json`)
      .then(res => res.json())
      .then(data => {
        const itemsArray = Object.entries(data.data).map(([key, value]) => ({
          ...value,
          id: key // ajoute la clé comme id
        }));
        setItems(itemsArray);
      });
  }, []);

  return (
    <div className="row">
      {items.map(item => (
        <Card
          key={item.id}
          className="col-3 d-flex"
          onClick={() => navigate(`/items/${item.id}`)}
        >
          <Card.Img
            variant="top"
            src={`https://ddragon.leagueoflegends.com/cdn/15.21.1/img/item/${item.image.full}`}
            alt={item.name}
          />
          <Card.Body style={{ maxHeight: "250px" }}>
            <Card.Title className="text-truncate" >{item.name}</Card.Title>
            <Card.Text style={{ height: "40%", overflowY: "auto" }}>
              {item.plaintext}
            </Card.Text>
          </Card.Body>
          <div className="d-flex flex-column align-items-center">
            <Button
              variant="primary"
              onClick={() => navigate(`/items/${item.id}`)}
            >
              Voir plus
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ItemsCard;
