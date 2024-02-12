import { useParams } from 'react-router-dom'

function GameDetails() {
  const { id } =useParams();
  console.log(id);
  return (
    <div>GameDetails</div>
  )
}

export default GameDetails