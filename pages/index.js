import React from 'react'
import Link from 'next/link'


const index = () => {
  const [x,setX] = React.useState(0)
  const [y,setY] = React.useState(0)

  

  return (
    <>
    <h1>Add the two numbers together</h1>
    <form>
      <label for ="x">
        X
      </label>
      <input value ={x} id = "x" type = "number" onChange = {(e) => setX(e.target.value)}/>
      <label for ="y">
        y
      </label>
      <input value = {y} id = "y" type = "number" onChange = {(e) => setY(e.target.value)}/>
      {x}
      {y}
      <Link href = {{
        pathname:'/sum',
        query:{ x,y }
      }}>
        <a>
          Sum
        </a>
        
      </Link>
    </form>
    </>
  )
}

export default index
