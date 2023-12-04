import ReactLoading from 'react-loading'
import '../styles/Loading.css'

export default function Loading() {
  return (
    <>
      <div>Loading game data</div>
      <ReactLoading type='spin' color='#cc0000' height={'10%'} width={'10%'} />
    </>
  )
}