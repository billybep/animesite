import { useSelector } from 'react-redux'
import FavoriteCard from '../components/FavoriteCard'

const AnimeFavorite = () => {

  const favorites = useSelector(state => state.animeFavoriteReducer.favorites)

  return(
    <>
      <h1 style={{ margin: '3rem 0rem' }}>Favorite Anime</h1>
      <div className="container">
        <div className="row">
          {
            favorites?.map(anime => <FavoriteCard anime={anime} key={anime.mal_id} />)
          }
        </div>
      </div>
    </>
  )
}

export default AnimeFavorite
