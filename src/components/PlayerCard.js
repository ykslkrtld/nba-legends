import React, { useState } from 'react';

const PlayerCard = ({ img, name, statistics }) => {
  const [showImage, setShowImage] = useState(true);

  const toggleDisplay = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="card" onClick={toggleDisplay}>
      {showImage ? (
        <img src={img} className="card-img" alt={name} />
      ) : (
        <div className="statistics">
            <ul>
            {statistics.map((item)=> 
                <li>
                <i class="fa-solid fa-basketball" style={{color: "orange"}}></i>  {item}
                </li>
             )}
             </ul>
        </div>
      )}
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default PlayerCard;





// const PlayerCard = ({img, name, statistics}) => {
//   return (
//         <div className="card">
//             <img src={img} className="card-img" alt={name} />
//             <div className="statistics" style={{display:"none"}} >
//                 {statistics}
//             </div>
//             <div className="card-body">
//               <p className="card-text ">{name}</p>
//             </div>
//         </div>
//   )
// }

// export default PlayerCard

