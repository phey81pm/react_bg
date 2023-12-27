import { googleLogout } from '@react-oauth/google'
// import React from 'react'

function Logout() {
  return (
    googleLogout()
  )
}

export default Logout