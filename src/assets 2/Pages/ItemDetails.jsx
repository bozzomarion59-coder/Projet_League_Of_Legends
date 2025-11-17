import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import ItemsService from "../../Services/ItemsService";
import { useParams } from "react-router-dom";

const ItemsDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const fetchDetailItem = async () => {
    try {
      const response = await ItemsService.getItems();
      const data = Object.entries(response.data.data).map(([key, value]) => ({
        ...value,
        id: key
      }));
      const foundItem = data.find(i => String(i.id) === String(id));
      setItem(foundItem);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetailItem();
  }, [id]);

  if (!item) {
    return <p style={{ color: "white" }}>Chargement...</p>;
  } // j'ai demandé à l'ia car sinon rien ne s'affiché

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="shadow-lg border-0 bg-dark text-white w-75">
        <Card.Header className="text-center bg-danger text-white">
          <h2>{item.name}</h2>
        </Card.Header>

        <Card.Body className="d-flex">
          {/* Colonne image */}
          <div className="col-5 d-flex justify-content-center align-items-center">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.21.1/img/item/${item.image.full}`}
              alt={item.name}
              style={{
                maxHeight: "250px",
                objectFit: "contain",
                background: "#f8f9fa",
                borderRadius: "8px",
                padding: "10px"
              }}
            />
          </div>

          {/* Colonne détails */}
          <div className="col-7 ps-4">
            <h5 className="text-danger text-decoration-underline" >Description :</h5>
            <p>{item.description}</p>

            <h5 className="text-danger text-decoration-underline">Colloq :</h5>
            <p>{item.colloq}</p>

            <h5 className="text-danger text-decoration-underline">Statistiques :</h5>
            {item.stats &&
              Object.entries(item.stats).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
              ))}

            <h5 className="text-danger text-decoration-underline">Plaintext :</h5>
            <p>{item.plaintext}</p>

            <h5 className="text-danger text-decoration-underline">Coût :</h5>
            <table className="table table-white table-striped table-sm w-75">
              <tbody>
                <tr>
                  <td>Base</td>
                  <td>{item.gold?.base}</td>
                </tr>
                <tr>
                  <td>Purchasable</td>
                  <td>{item.gold?.purchasable ? "Oui" : "Non"}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{item.gold?.total}</td>
                </tr>
                <tr>
                  <td>Sell</td>
                  <td>{item.gold?.sell}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemsDetails;
