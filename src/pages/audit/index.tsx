import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuditApp = () => {
  const location = useLocation();
  const {pathname}=location;
  return (
    <>
      {pathname==="/audit"?<Navigate replace to ="audit/app"/>:""}
      <Outlet/>
    </>
  )
}
export default AuditApp