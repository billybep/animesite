export const setFavorites = (payload) => {
  return { type: 'favorites/setFavorites', payload }
}

export const setDetail = (payload) => {
  return { type: 'animeDetail/setAnimeDetail', payload }
}

export const fetchDetail = (payload) => {
  return (dispatch) => {
    fetch(`https://api.jikan.moe/v3/anime/${payload.id}`)
      .then(response => response.json())
      .then(data => dispatch(setDetail(data)))
      .catch(err => payload.setError(err))
      .finally( _ => payload.setLoading(false))
  }
}