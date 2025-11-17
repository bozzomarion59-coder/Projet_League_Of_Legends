import { useEffect, useState } from "react";
import RegionsService from "../../Services/RegionsService";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
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


const RegionDetails = () => {
    const [region, setDetailRegion] = useState({});
    const { id } = useParams();
    
    const fetchDetailRegion = async () => {
        try {
            const response = await RegionsService.getRegions();
            const data = response.data[id];
            setDetailRegion(data);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        fetchDetailRegion();
    }, [id]);
    
    return <>
        {/* Fiche de la région */}
        <Container className="region-details-container text-center my-4">
            {/* Image centrée */}
            <div className="region-header mb-5">
                <img
                    className="region-image"
                    src={imageMap[id]}
                    alt={id}
                    style={{ maxWidth: '800px', width: '100%' }}
                />
                <h1 className="region-name mt-3" style={{ color: "darkGreen"}}>{id}</h1>
            </div>
            
            {/* Deux colonnes en dessous */}
            <div className="row justify-content-center text-start">
                {/* Colonne gauche */}
                <div className="col-md-6 mb-4">
                    <h2 className="section-title" style={{ color: "darkRed"}}>Description</h2>
                    <p style={{ whiteSpace: 'pre-line', color: "white"}}>{region.description}</p>
                </div>
                
                {/* Colonne droite */}
                <div className="col-md-5 mb-4">
                    <h2 className="section-title" style={{ color: "darkRed"}}>Champions de la région</h2>
                    <div className="champions-grid">
                        {region.championIds && region.championIds.map((championId) => (
                            <Link 
                                key={championId} 
                                to={`/champions/${championId}`}
                                className="champion-link btn btn-outline-primary btn-sm m-1"
                            >
                                {championId}
                            </Link>
                        ))}
                    </div>
                    
                    <h2 className="section-title mt-4" style={{ color: "darkRed"}}>Icône de la région</h2>
                    <img
                        src={region.icon}
                        alt={`${id} icon`}
                        className="region-icon"
                        style={{ maxWidth: '150px' }}
                    />
                </div>
            </div>
        </Container>
    </>;
};

export default RegionDetails;