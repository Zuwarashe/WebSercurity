import React, { useEffect } from "react";



const App = () => {

  const getUser = () =>{
    fetch("/users")
    .then(res => res.json())
    .then(json => console.log(json))
  }
  
  useEffect(()=>{
    getUser()
  },[]) 


  return (
    <div>
      App
    </div>
  )
}

export default App