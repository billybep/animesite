import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect( _ => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(({ results }) => setData(results))
      .catch(err => setError(err))
      .finally( _ => setLoading(false))
  } ,[])

  return { data, setData, loading, error }
}

export default useFetch