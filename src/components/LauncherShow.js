import React, { useEffect, useState } from "react";

const LauncherShow = (props) => {
  // debugger
  const [launcher, setLauncher] = useState({})

  const id = props.match.params.id
  
  useEffect(() => {
    fetch(`/api/v1/launcher/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        // throw error
      }
    })
    .then((responseBody) => {
      // debugger
      setLauncher(responseBody)
    })
  }, [])

  return(
    <div>
      <h1>{launcher.name}</h1>
      <h3>{launcher.bio}</h3>
    </div>
  )
}

export default LauncherShow;