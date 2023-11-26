// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe(){
  function handlefocus(){
    console.log("Good!")
  }

  function handleBlur(){
    console.log("Hey! Eyes on me!")
  }
  return(
    <div>
      <button onFocus={handlefocus} onBlur={handleBlur}>Eyes on me</button>
    </div>
  )
}


export default EyesOnMe