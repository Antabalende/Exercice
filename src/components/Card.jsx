function Card({ icon, title, text, color }) {
  return (
    <div className={`card ${color}`}>
      <img src={icon} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <button>Learn More</button>
    </div>
  )
}

export default Card
