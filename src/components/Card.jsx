import '../styles/Card.css'


export default function Card({ data, onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <img src={data.image} alt={data.name} />
        <span className="card-title">{data.name}</span>
      </div>
    </>
  )
}