import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      try {
        const res = await axios.get(url)
        setData(res.data.data)
      } catch (err) {
        setErr(true)
      }
      setLoading(false)
    }
    fetch()
  }, [url])

  const reFetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(url)
      setData(res.data)
    } catch (err) {
      setErr(true)
    }
    setLoading(false)
  }
  return { data, loading, err, reFetchData }
}

export default useFetchData
