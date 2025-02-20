import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [Imgdata, setImgdata] = useState([])

  async function clicked(){

    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data)
    setImgdata(response.data)
  }

  return (
    <div className='p-2'>
      <button onClick={clicked} className='p-2 text-white rounded bg-blue-500 active:scale-95'>Get Data</button>
      <br />
      <br />
      {Imgdata.map(function(elem,idx){

        return <div key={idx} className='inline-block m-1'>
          <img className='h-30' src={elem.download_url} alt="" />
          <h4>{elem.author}</h4>
        </div>
      })}
    </div>
  )
}

export default App