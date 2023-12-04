
export default function Score({ title, value }) {
  return (
    <>
      <div className="score">
        <span className="score-title">{title} : </span>
        <span className="score-value">{value}</span>
      </div>
    </>
  )
}