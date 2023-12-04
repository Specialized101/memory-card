import '../styles/Score.css'

export default function Score({ title, value }) {
  return (
    <>
      <div className="score">
        <div className="score-title">{title + ' :'}</div>
        <div className="score-value">{value}</div>
      </div>
    </>
  )
}