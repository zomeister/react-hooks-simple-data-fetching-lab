// create your App component here
import { useState , useEffect } from 'react'
export default function App () {
    const [loaded, setLoaded] = useState(false)
    const [dog, setDog] = useState("")

    useEffect( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDog(data)
            setLoaded(true)
        })
    }, [])

    return (
        <div className="app container">
            {loaded 
                ? <img 
                    src={dog.message}
                    alt="A Random Dog"
                />
                : <p>Loading...</p>
            }
        </div>
    )
}