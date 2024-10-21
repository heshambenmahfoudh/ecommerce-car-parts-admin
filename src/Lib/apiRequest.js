import axios from 'axios'
import toast from 'react-hot-toast'

export const ApiPostRequest = async (
  endPoint,
  e,
  data,
  setLoading,
  setRederect,
  setErr,
  page,
  resourceName,
  admin,
) => {
  e.preventDefault()
  setLoading((prev) => !prev)

  try {
    await axios.post(endPoint, data)
    setLoading((prev) => !prev)
    toast.success(`${resourceName} Created Successfully`)
  } catch (err) {
    setLoading((prev) => !prev)
    toast.error(err?.response?.data?.message)
    return setErr(err?.response?.data?.message)
  }
  if (admin === true) {
    return setRederect(page)
  } else {
    return setRederect(page)
  }
}
export const ApiPostImageRequest = async (endPoint, e, setImage) => {
  try {
    e.preventDefault()
    const file = e.target.files[0]
    const dataImge = new FormData()
    dataImge.append('photo', file)
    if (file) {
      const { data } = await axios.post(endPoint, dataImge)
      setImage(data)
      toast.success(`Image Upload Successfully`)
    }
  } catch (err) {
    toast.error(`Failed To Upload Image`)
  }
}

export const ApiPutRequest = async (
  endPoint,
  e,
  data,
  setLoading,
  setRederect,
  setErr,
  page,
  resourceName,
  admin,
) => {
  e.preventDefault()
  setLoading((prev) => !prev)

  try {
    await axios.put(endPoint, data)
    setLoading((prev) => !prev)
    toast.success(`${resourceName} Updated Successfully`)
  } catch (err) {
    setLoading((prev) => !prev)
    toast.success(err?.response?.data?.message)
    return setErr(err?.response?.data?.message)
  }

  if (admin && admin === true) {
    return setRederect('/admins')
  } else {
    return setRederect(page)
  }
}

export const ApiDeleteRequest = async (endPoint, id, resourceName) => {
  try {
    await axios.delete(`/${endPoint}/${id}`)
    toast.success(`${resourceName} Deleted Successfully`)
  } catch (err) {}
}

export const ApiLoginAdmin = async (e, dispatch, data) => {
  e.preventDefault()
  dispatch({ type: 'AUTH_START' })
  try {
    const res = await axios.post(`/auth/login?admin=true`, data)
    dispatch(dispatch({ type: 'AUTH_SUCCESS', payload: res.data.data }))
    toast.success('User Login Successfully')
  } catch (err) {
    dispatch({ type: 'AUTH_FAIL', payload: err.response.data })
    toast.error(err?.response?.data?.message)
  }
}

export const ApiPutRequestProfile = async (
  endPoint,
  e,
  id,
  data,
  dispatch,
  resourceName,
) => {
  e.preventDefault()

  dispatch({ type: 'UPDATE_START' })
  try {
    const res = await axios.put(`/${endPoint}/${id} `, data)
    dispatch({ type: 'UPDATE_SUCCESS', payload: res.data.data })
    toast.success(`${resourceName} Updated Successfully`)
  } catch (err) {
    toast.success(err.response.data.message)
    dispatch({ type: 'UPDATE_FAIL', payload: err.response.data.message })
  }
}
