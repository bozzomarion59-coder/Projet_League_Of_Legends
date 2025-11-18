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
    <div className="row g-4 p-3"
      style={{ justifyContent: "center" }}
    >

      {items.map(item => (
        <Card
          style={{ backgroundColor: "#2e2e2e", color: "white"}}
          key={item.id}
          className="col-3 shadow-sm border-0 mb-4"
          onClick={() => navigate(`/items/${item.id}`)}
        >
          <Card.Img
            variant="top"
            src={`https://ddragon.leagueoflegends.com/cdn/15.21.1/img/item/${item.image.full}`}
            width="40"
            height="40"
            style={{ borderRadius: '10px' }}
            className="d-inline-block align-top me-2"
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
