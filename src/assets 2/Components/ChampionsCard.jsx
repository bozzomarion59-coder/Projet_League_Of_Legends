import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ChampionsCard() {
  const [champions, setChampions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/cdn/15.21.1/data/fr_FR/champion.json')
      .then(res => res.json())
      .then(data => {
        setChampions(Object.values(data.data));
      });
  }, []);

  return (
    <div className="row g-4 p-4">
      {champions.map(champion => (
        <Card style={{backgroundColor: "#2e2e2e", color:"white"}} key={champion.id} className="col-3 shadow-sm border-0 mb-4" onClick={() => navigate(`/champions/${champion.id}`)}>
          <Card.Img
            variant="top"
            src={`https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${champion.image.full}`}
            alt={champion.name}
          />
          <Card.Body style={{ maxHeight: "250px" }}>
            <Card.Title className="text-truncate">{champion.name}</Card.Title>
            <Card.Text style={{ height: "40%", overflowY: 'auto' }}>
              {champion.title}
            </Card.Text>
          </Card.Body>
          <div className="d-flex flex-column align-items-center pb-3">
            <Button variant="primary" onClick={() => { navigate(`/champions/${champion.id}`) }}>Voir plus</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ChampionsCard;
