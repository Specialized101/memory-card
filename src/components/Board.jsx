import Card from './Card.jsx'
import '../styles/Board.css'

export default function Board({ data, handleClick }) {
  return (
    <>
      <div className="board">
        {
          data.slice(0, 8).map(item => {
            return <Card key={item.id} data={item} onClick={() => handleClick(item)} />
          })
        }
      </div>
    </>
  )
}
