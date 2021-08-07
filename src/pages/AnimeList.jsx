import AnimeCard from '../components/AnimeCard'
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch.js'
import Loading from '../components/Loading'
import { FormControl, Form } from 'react-bootstrap'

function AnimeList() {

  const { data: animes, loading, error } = useFetch('https://api.jikan.moe/v3/search/anime?q=anime&order_by=score')
  const [ searchAnime, setSearchAnime ] = useState('')

  if (loading) return <Loading />
  if (error) return <h1>{ error.message }</h1>
  
  return(
    <>
      <div className="container mt-4">
        <div>
          <Form inline>
            <FormControl 
              type="text" 
              placeholder="Search" 
              className="mr-sm-2" 
              onChange={ event => {setSearchAnime(event.target.value)} }/>
          </Form>
        </div>
      </div>
      <h1 style={{ marginTop : '15px' }}>List Anime</h1>
      <div className="container mt-5">
        <div className="row">
          { 
            animes
              .filter(anime => {
                if (searchAnime === '') return anime
                else if (anime.title.toLowerCase().includes(searchAnime.toLowerCase())) return anime
              })
              .map(anime => <AnimeCard anime={anime} key={anime.mal_id} />)
          }
        </div>
      </div>
    </>
  )
}

export default AnimeList