function home(){
    return(
        <div>
         <h1 className="fixed top-20 right-0 left-0">Home <img className='inline w-12 h-24 ' src="/home-page-svgrepo-com.svg"/></h1>

            <p className="text-6xl mb-8">React Hooks examples</p>
            <ul className="list-disc list-inside text-left">
                <li ><strong>Counter App</strong>: utilizes useState</li>
                <li ><strong>Weather App</strong>: utilizes useEffect</li>
                <li ><strong>Stop Watch</strong>utilizes useRef</li>
            </ul>
        </div>
    )
}

export default home