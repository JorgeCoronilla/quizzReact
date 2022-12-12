import React from 'react'
import { NavLink } from 'react-router-dom'

export const Error = () => {
  return (
    <div>

        <h1>Error 404</h1>
        <br/>
        <p>parece que ha habido un problema. Esta página no existe.</p>
        <br/>
        <p>
                    <NavLink to="/">Inicio</NavLink>
                </p>
    </div>
  )
}
