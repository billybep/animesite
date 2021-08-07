import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetail } from '../store/action'

const AnimeDetail = () => {

  const animeDetail = useSelector(state => state.animeDetailReducer.animeDetail)
  const dispatch = useDispatch()

  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect( _ => {
    setLoading(true)
    dispatch(fetchDetail({ id, loading, setLoading, error, setError}))
  }, [id])

  if (loading) return <Loading />
  if (error) return <h1>{ error.message }</h1>

  return (
    <>
      <div className="container mt-5 text-left">
        <div className="row">
          <div className="col-3">
            <Image src={animeDetail.image_url} thumbnail/>
          </div>
          <div className="col-9">
            <h2>{animeDetail.title}</h2>
            <h5>Season: {animeDetail.premiered} | Episodes: {animeDetail.episodes}</h5>
            <h5>Score: {animeDetail.score}</h5>
            <h5 style={{ marginTop: '10px'}}>Sinopsis:</h5>
            <p>{animeDetail.synopsis}</p>
          </div>
        </div>
      </div>  
    </>
  )
}

export default AnimeDetail