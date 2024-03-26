// CardContainer.js
import PlayerCard from "./PlayerCard";

const CardContainer = ({ filteredData }) => {
  return (
    <div className="container">
      {filteredData.map((item, index) => (
        <PlayerCard key={index} {...item} />
      ))}
    </div>
  );
};

export default CardContainer;
