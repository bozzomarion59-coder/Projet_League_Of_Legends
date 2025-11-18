import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bandleImg from "../../assets/regions/BandleCity.jpg";
import bilgewaterImg from "../../assets/regions/Bilgewater.jpg";
import demaciaImg from "../../assets/regions/Demacia.jpg";
import freljordImg from "../../assets/regions/Freljord.jpg";
import ioniaImg from "../../assets/regions/Ionia.jpg";
import ixtalImg from "../../assets/regions/Ixtal.jpg";
import neantImg from "../../assets/regions/Néant.jpg";
import noxusImg from "../../assets/regions/Noxus.jpg";
import obscuresImg from "../../assets/regions/IlesObscures.jpg";
import piltoverImg from "../../assets/regions/Piltover.jpg";
import shurimaImg from "../../assets/regions/Shurima.jpg";
import targonImg from "../../assets/regions/Targon.jpg";
import zaunImg from "../../assets/regions/Zaun.jpg";

const imageMap = {
  Demacia: demaciaImg,
  Noxus: noxusImg,
  Ionia: ioniaImg,
  Piltover: piltoverImg,
  Zaun: zaunImg,
  Freljord: freljordImg,
  Shurima: shurimaImg,
  Targon: targonImg,
  Bilgewater: bilgewaterImg,
  IlesObscures: obscuresImg,
  Néant: neantImg,
  Ixtal: ixtalImg,
  BandleCity: bandleImg
};

function RegionsCard() {
  const [regions, setRegions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/regions.json")
      .then(res => res.json())
      .then(data =>
        setRegions(Object.entries(data).map(([name, info]) => ({ name, ...info })))
      );
  }, []);

  return (
    <div className="row g-5 p-4">
      {regions.map(region => (
        <Card
          key={region.name}
          className="col-3 shadow-sm border-0 mb-4"
          style={{ backgroundColor: "#2e2e2e", color: "white" }}
          onClick={() => navigate(`/regions/${region.name}`)}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Card.Img
            variant="top"
            src={imageMap[region.name]} // correspondance avec imageMap
            alt={region.name}
            style={{
              maxHeight: "180px",
              objectFit: "cover",
              borderRadius: "8px",
              backgroundColor: "#2e2e2e"
            }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{region.name}</Card.Title>
            <Card.Text style={{ height: "60px", overflowY: "auto", fontSize: "0.9rem" }}>
              {region.description.substring(0, 150)}...
            </Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-center pb-3">
            <Button variant="outline-primary" size="sm">
              Voir plus
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default RegionsCard;