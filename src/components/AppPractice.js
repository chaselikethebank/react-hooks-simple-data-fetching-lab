import React, { useEffect, useState} from 'react';

function App() {
    const [random, setRandom] = useState("");
    function fetchRandomDog() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((dogImage) => setRandom(dogImage.message))
    }
    
    useEffect(fetchRandomDog, [])
    return(
        <div className='App'>
            <p>Loading...</p>
            <img src={random} alt="dog"/>
        </div>      
        )
    }
    export default App;