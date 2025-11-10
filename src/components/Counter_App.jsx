import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  
  return (
    <div>
      <h1 className='fixed top-20 right-0 left-0'>Counter App</h1>
      <div className='grid h-56 w-360 grid-cols-2 content-evenly gap-6'>
      <div  className='counter-container p-4 bg-white border-2 border-blue-500 rounded-2xl'>
        <p className='p-4 text-3xl text-black'>Count : {count}</p>
        <div className='button-container'>
          <button className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-blue-500 p-4 bg-gray-200' onClick={() => setCount(count + 1)}>Increment by one</button>
          <button className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-red-500 p-4 bg-gray-200' onClick={() => setCount(count - 1)}>Decrement by one</button>
          <button className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-white p-4 bg-gray-200' onClick={() => setCount(0)}>Reset</button>
        </div> 
    </div>

    <div  className='counter-container p-4 border-2 rounded-2xl'>
        <p className='p-4 text-3xl'>Count : {count2}</p>
        <div className='button-container'>
          <button className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-blue-500 p-4 bg-gray-200' onClick={() => setCount2(count2 + 5)}>Increment by 5</button>
          <button className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-red-500 p-4 bg-gray-200' onClick={() => setCount2(count2 - 5)}>Decrement by 5</button>
          <button className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-white p-4 bg-gray-200' onClick={() => setCount2(0)}>Reset</button>
        </div> 
    </div>
</div>
    </div>
  )
}

export default Counter