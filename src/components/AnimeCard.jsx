import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setFavorites } from '../store/action'
import swal from 'sweetalert';

function AnimeCard(props) {

  const history = useHistory()
  const dispatch = useDispatch()

  const detailAnime = (id) => {
    history.push(`/anime/${id}`)
  }

  const addFavorite = (payload) => {
    dispatch(setFavorites(payload))
    swal(`${payload.title}!`, "has been add to your favorite anime list", "success");
  }

  return(
    <>
      <Card style={{ width: '15.5rem', margin: '5px' }}>
        <Card.Img 
          variant="top" 
          src={props.anime.image_url}
          style={{ cursor: 'pointer' }}
          onClick={ _ => detailAnime(props.anime.mal_id) } 
        />
        <Card.Body>
          <Card.Title>{props.anime.title}</Card.Title>
          <Card.Text>{props.anime.score}</Card.Text>
          <Button 
            variant="primary" 
            onClick={ _ => window.location.href=props.anime.url } >
              Website
          </Button>
          <Button 
            variant="outline" 
            onClick={ _ => addFavorite(props.anime) } >
              <i className="fas fa-heart" style={{ fontSize: '20px', color: 'red' }}></i>
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default AnimeCard