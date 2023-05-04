import "./card.scss";

function Card(props) {
  return (
    <div className="card">
      <img src={props.icon} alt="icon"/>
      <h2>{props.title}</h2>
      <p>{props.promessa}</p>
    </div>
  )
}

export default Card