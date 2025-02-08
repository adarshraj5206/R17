import React, { useState } from 'react'
import Card from './components/Card';

const App = () => {

  const [colorR, setcolorR] = useState(0)
  const [colorG, setcolorG] = useState(0)
  const [colorB, setcolorB] = useState(0)
  
  return (
    <div>
      <Card red={colorR} green={colorG} blue={colorB}/>
      <button onClick={function(){
        setcolorR(Math.floor(Math.random()*256))
        setcolorG(Math.floor(Math.random()*256))
        setcolorB(Math.floor(Math.random()*256))
      }}>chnage</button>
    </div>
  )
}

export default App