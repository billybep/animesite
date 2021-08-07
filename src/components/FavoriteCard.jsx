import { Card } from 'react-bootstrap'

const FavoriteCard = (props) => {
  return (
    <>
      <Card className="text-black m-1">
        <Card.Img 
          src={props.anime.image_url}
          style={{ width: '12rem', height: '18rem', margin: '10px' }} 
          alt="Card image"/>
        <Card.Body style={{ maxWidth: '13rem' }}>
          <Card.Text>{props.anime.title}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default FavoriteCard