import axios from "axios";
import { useEffect, useState } from "react"


const useGameHooks = () => {
    const [games, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        axios('../game.json')
        .then((data) =>{ setGame(data.data)
            setLoading(false)
        })
        .catch((err) => setError(err))
        // .finally(() => setLoading(false))
    } , [])

    return {games , loading , error};
}

export default useGameHooks;