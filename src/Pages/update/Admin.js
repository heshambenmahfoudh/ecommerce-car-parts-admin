import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import NewAdmin from '../new/NewAdmin'

const Admin = () => {
  const adminId = useParams().id
  const { data: admin } = useFetchData(`/users/find/${adminId}`)

  return <NewAdmin adminData={admin} id={adminId} />
}

export default Admin
