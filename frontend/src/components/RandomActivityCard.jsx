/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { Card } from "primereact/card";
// eslint-disable-next-line no-unused-vars
function RandomActivityCard({ randomActivity, setRandomActivity }) {
  const { data } = randomActivity;
  return (
    <Card className="cardActivity">
      <p className="p-card-title">{data.activity}</p>
      <p className="p-card-subtitle">Type d'activité: {data.type}</p>
      <p className="p-card-subtitle">
        Nombre de participants: {data.participants}
      </p>
    </Card>
  );
}
export default RandomActivityCard;
