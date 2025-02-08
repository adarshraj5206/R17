import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
        <div style={{backgroundColor:`rgb(${props.red},${props.green},${props.blue})`}}
        className="box">

        </div>
    </div>
  )
}

export default Card