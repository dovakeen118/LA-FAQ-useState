import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])
  
  useEffect(() => {
    fetch('/api/v1/launchers')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        // throw error
      }
    })
    .then((response) => response.json())
    .then((responseBody) => {
      // debugger
      setLaunchers(responseBody)
    })
  }, [])

  const launcherList = launchers.map((launcher) => {
    return(
      <li key={launcher.id}>
        <Link to={`/launcher/${launcher.id}`}>
          {launcher.name}
        </Link>
      </li>
    )
  })

  return(
    <div>
      <h1>launcher list!</h1>
      <ul>
        {launcherList}
      </ul>
    </div>
  )
}

export default LauncherList;
