import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemsService from "../../Services/ItemsService";
import { useParams } from "react-router-dom";

// Fonction utilitaire pour supprimer toutes les balises HTML
function stripHtmlTags(str) {
  return str ? str.replace(/<[^>]*>/g, "") : "";
}

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
    return <p style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Chargement...</p>;
  }

  return (
    <Container fluid className="my-4 px-3">
      {/* Image et nom centrés */}
      <div className="d-flex flex-column align-items-center mb-4">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/15.21.1/img/item/${item.image.full}`}
          alt={item.name}
          className="img-fluid mb-3"
          style={{
            maxHeight: "250px",
            background: "#f8f9fa",
            borderRadius: "8px",
            padding: "10px",
          }}
        />
        <h1 style={{ color: "darkGreen", textAlign: "center" }}>{item.name}</h1>
      </div>

      {/* Deux colonnes */}
      <div className="row justify-content-center">
        {/* Colonne gauche : Description */}
        <div className="col-12 col-md-6 mb-4">
          <h2 style={{ color: "darkRed" }}>Description</h2>
          <p style={{ color: "white" }}>{stripHtmlTags(item.description)}</p>

          <h2 style={{ color: "darkRed" }}>Colloq</h2>
          <p style={{ color: "white" }}>{stripHtmlTags(item.colloq)}</p>
        </div>

        {/* Colonne droite : Statistiques et coût */}
        <div className="col-12 col-md-6 mb-4">
          <h2 style={{ color: "darkRed" }}>Statistiques</h2>
          {item.stats &&
            Object.entries(item.stats).map(([key, value]) => (
              <p key={key} style={{ color: "white" }}>
                {key}: {value}
              </p>
            ))}

          <h2 style={{ color: "darkRed" }}>Plaintext</h2>
          <p style={{ color: "white" }}>{stripHtmlTags(item.plaintext)}</p>

          <h2 style={{ color: "darkRed" }}>Coût</h2>
          <table className="table table-dark table-striped table-sm w-100">
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
      </div>
    </Container>
  );
};

export default ItemsDetails;
