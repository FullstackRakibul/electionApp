import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const CoreIndex = () => {
  const location = useLocation();
  const {pathname}=location;
  return (
    <>
      {pathname==="/core"?<Navigate replace to ="dashboard"/>:""}
      <Outlet/>
    </>
  )
}
export default CoreIndex