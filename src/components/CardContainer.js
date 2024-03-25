import PlayerCard from "./PlayerCard"

const CardContainer = ({data}) => {
  return (
    <div className="container" >
       {
        data.map((item, index) => (
            <PlayerCard key={index} {...item}/>
        ))
       }
    </div>
  )
}

export default CardContainer