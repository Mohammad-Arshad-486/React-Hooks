import { useRef , useState, useEffect} from "react"


function stopwatch () {
   const [isRunning, setisRunning] = useState(false)
   const [Time, setTime] = useState(0)
   const timeRef = useRef(null)

   const handleStart = () => {
   if(!isRunning){
    setisRunning(true)
    timeRef.current= setInterval(() => {
        setTime((prevTime) => prevTime+1)
    },1000);
   }
   }

   const handleStop = () => {
    clearInterval(timeRef.current)
    setisRunning(false)
   }
useEffect(() => {
  return () => clearInterval(timeRef.current)
}, [])

   return (  //className={`inline w-12 h-12 ${isRunning ? "animate-spin" : ""}`}

        <div>
 <h1 className="fixed top-20 right-0 left-0">Stopwatch <img className='inline w-12 h-24 ' src="/stopwatch-svgrepo-com.svg"/></h1>
 <p className="p-10 text-5xl">Timer : {Time} sec <img className={`inline w-12 h-24 ${isRunning ? "animate-spin" : ""}`} src="/hourglass-svgrepo-com.svg"/></p>
 <div>
    <button onClick={handleStart} className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-blue-500 p-4 bg-gray-200' >Start</button>
    <button onClick={handleStop} className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-blue-500 p-4 bg-gray-200'>Stop</button>
    <button onClick={()=> setTime(0)} className='btn m-10 transition-all duration-500 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-blue-500 p-4 bg-gray-200'>Reset</button>

 </div>

      
    </div>       
    )
}
export default stopwatch