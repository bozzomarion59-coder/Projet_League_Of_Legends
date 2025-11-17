import { useEffect, useState } from "react";
import ChampionsService from "../../Services/ChampionsService";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


const ChampionDetailsPage = () => {
    const [champion, setDetailChampion] = useState({});
    const { id } = useParams();

    const fetchDetailChampion = async () => {
        try {
            const response = await ChampionsService.getChampionById(id);
            const data = response.data.data[id];
            setDetailChampion(data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        fetchDetailChampion();
    }, [id]);



    if (!champion || !champion.info) {
        return <p>Chargement</p>;
    }

    return <>
        {/* Fiche du champion */}
        <Container className="champion-details-container text-center my-4">
            {/* Image centrée */}
            <div className="champion-header mb-5">
                <img
                    className="champion-image"
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                    alt={champion.name}
                />
                <h1 className="champion-name mt-3 " style={{ color: "darkGreen"}}>{champion.name}</h1>
                <h4 className="champion-title text-muted">{champion.title}</h4>
            </div>

            {/* Deux colonnes en dessous */}
            <div className="row justify-content-center text-start">
                {/* Colonne gauche */}
                <div className="col-md-6 mb-4">
                    <h2 className="section-title" style={{ color: "darkRed"}}>Histoire</h2>
                    <p style={{color: "white"}}>{champion.blurb}</p>

                    <h2 className="section-title" style={{ color: "darkRed"}}>Sorts</h2>
                    {champion.spells.map((spell) => (
                        <div key={spell.id} className="spell-container mb-3">
                            <h4 style={{ color: "darkOrange"}}>{spell.name}</h4>
                            <p className="text-light">{spell.description}</p>
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/15.21.1/img/spell/${spell.image.full}`}
                                alt={spell.name}
                                className="spell-image"
                            />
                        </div>
                    ))}
                </div>

                {/* Colonne droite */}
                <div className="col-md-5 mb-4">
                    <h2 className="section-title" style={{ color: "darkRed"}}>Statistiques</h2>
                    <table className="table table-dark table-striped table-sm mb-4">
                        <tbody>
                            <tr><td>Attaque</td><td>{champion.info.attack}</td></tr>
                            <tr><td>Défense</td><td>{champion.info.defense}</td></tr>
                            <tr><td>Magie</td><td>{champion.info.magic}</td></tr>
                            <tr><td>Difficulté</td><td>{champion.info.difficulty}</td></tr>
                        </tbody>
                    </table>

                    <h2 className="section-title" style={{ color: "darkRed"}}>Informations supplémentaires</h2>
                    <table className="table table-dark table-bordered table-sm">
                        <tbody>
                            <tr><td>Points de vie</td><td>{champion.stats.hp}</td></tr>
                            <tr><td>Armure</td><td>{champion.stats.armor}</td></tr>
                            <tr><td>Vitesse de déplacement</td><td>{champion.stats.movespeed}</td></tr>
                            <tr><td>Dégâts d’attaque</td><td>{champion.stats.attackdamage}</td></tr>
                            <tr><td>Régénération de vie</td><td>{champion.stats.hpregen}</td></tr>
                            <tr><td>Portée d’attaque</td><td>{champion.stats.attackrange}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>


    </>;

};

export default ChampionDetailsPage;