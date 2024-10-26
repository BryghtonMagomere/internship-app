import React from 'react'

function Layout(props) {
  return (
   <div className="" style={{ height:"100vh",width:"100vw"}}>
    {props.children}
   </div>
  )
}

export default Layout